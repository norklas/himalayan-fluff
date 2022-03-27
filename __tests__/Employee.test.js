// Using employee constructor
const Employee = require("../lib/Employee");

// Testing object creation
test("creates new employee object", () => {
  const employee = new Employee("Nick", 60, "nickm890@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Testing name from getName()
test("gets employee name", () => {
  const employee = new Employee("Nick", 60, "nickm890@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// Testing ID from getId()
test("gets employee ID", () => {
  const employee = new Employee("Nick", 60, "nickm890@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Testing email from getEmail()
test("get employee email", () => {
  const employee = new Employee("Nick", 60, "nickm890@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Testing role from getRole()
test("get role of employee", () => {
  const employee = new Employee("Nick", 60, "nickm890@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
