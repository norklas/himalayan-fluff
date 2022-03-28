// File system import
const fs = require("fs");

// Inquirer import
const inquirer = require("inquirer");

// Team member imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Page creation
const generateHTML = require("./src/generateHTML");

// Array to hold team members
const teamArr = [];

// Manager inquirer prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
        validate: (nameInput) => {
          return nameInput
            ? true
            : console.log("Please enter the manager's name!");
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enther the manager's ID:",
        validate: (idInput) => {
          return idInput ? true : console.log("Please enter the manager's ID!");
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email:",
        validate: (emailInput) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailInput
          )
            ? true
            : console.log("Please enter a valid email address!");
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (officeNumberInput) => {
          return isNaN(officeNumberInput)
            ? (console.log("Please enter an office number!"), false)
            : true;
        },
      },
    ])
    .then((managerInput) => {
      // Destructuring for manager data
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      // Pushing manager to team array
      teamArr.push(manager);
      console.log(manager);
    });
};

// Employee inquirer prompts
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role:",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
        validate: (nameInput) => {
          return nameInput
            ? true
            : console.log("Please enter an employee's name");
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID:",
        validate: (idInput) => {
          return idInput
            ? true
            : console.log("Please enter the employee's ID!");
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email:",
        validate: (emailInput) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
            emailInput
          )
            ? true
            : console.log("Please enter a valid email address!");
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's GitHub username:",
        when: (input) => input.role === "Engineer",
        validate: (githubInput) => {
          return githubInput
            ? true
            : console.log("Please enter the employee's GitHub username!");
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the employee's school:",
        when: (input) => input.role === "Intern",
        validate: (schoolInput) => {
          return schoolInput
            ? true
            : console.log("Please enter the employee's school!");
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would  you like to add more team members?",
        default: "false",
      },
    ])
    .then((employeeInput) => {
      // Destructuring for employee data
      let { name, id, email, role, github, school, confirmAddEmployee } =
        employeeInput;
      let employee;

      // If role is Engineer then add new Engineer class with destructured data
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        // If role is Intern then add new Intern class with destructured data
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
      }

      teamArr.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    });
};

// Function to generate HTML page using node file system
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // If error is true
    if (err) {
      console.log(err);
      return;
      // Once profile is created
    } else {
      console.log(
        "Your team profile has been successfully created! Please look at index.html to see!"
      );
    }
  });
};

// Calling addManager
addManager()
  // Once addManager is done, then addEmployee is called
  .then(addEmployee)
  // Once addEmployee is done, then push both addManager, and addEmployee data to teamArr
  .then((teamArr) => {
    // Generate HTML page once teamArr has data
    return generateHTML(teamArr);
  })
  // Once page is generated, then use pageHTML data
  .then((pageHTML) => {
    // call writeFile with pageHTML data, which will then write the index.html
    return writeFile(pageHTML);
  })
  // Catchiung any errors and console.log them
  .catch((err) => {
    console.log(err);
  });
