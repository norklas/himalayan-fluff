// Importing Manager constructor
const Manager = require("../lib/Manager");

// Testing manager object creation
test("creates a Manager object", () => {
  const manager = new Manager("Nick", 60, "nickm890@gmail.com", 2);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Testing role from getRole()
test("gets role of employee", () => {
  const manager = new Manager("Nick", 60, "nickm890@gmail.com", 2);

  expect(manager.getRole()).toEqual("Manager");
});
