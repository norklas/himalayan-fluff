// Importing Employee constructor
const Employee = require("./Employee");

// Intern contructor extends Employee constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Using super to get employee constructor
    super(name, id, email);

    this.school = school;
  }

  // Returning school from input
  getSchool() {
    return this.school;
  }

  // Change employee role to intern
  getRole() {
    return "Intern";
  }
}

// Export Intern
module.exports = Intern;
