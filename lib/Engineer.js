// Importing Employee constructor
const Employee = require("./Employee");

// Engineer constructor extends Employeee constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Using super to get employee constructor
    super(name, id, email);

    this.github = github;
  }

  // Returning github from input
  getGithub() {
    return this.github;
  }

  // Change employee role to engineer
  getRole() {
    return "Engineer";
  }
}

// Exporting Engineer
module.exports = Engineer;
