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

// Manager prompts
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
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArr.push(manager);
      console.log(manager);
    });
};

addManager();
