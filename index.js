// File system import
const fs = require("fs");

// Inquirer import
const inquirer = require("inquirer");

// Team member imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
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

addManager().then(addEmployee);
