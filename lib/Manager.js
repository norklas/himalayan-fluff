// Importing Employee constructor
const Employee = require("./Employee");

// Manager constructor extends Employee constuctor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Using super to get employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // Change employee role to manager
  getRole() {
    return "Manager";
  }
}

// Export
module.exports = Manager;
