// Importing Intern constructor
const Intern = require("../lib/Intern");

// Testing intern object creation
test("creates an Intern object", () => {
  const intern = new Intern("Nick", 60, "nickm890@gmail.com", "UConn");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

// Testing school from getSchool()
test("gets Intern school", () => {
  const intern = new Intern("Nick", 60, "nickm890@gmail.com", "UConn");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// Testing role from getRole()
test("gets role of employee", () => {
  const intern = new Intern("Nick", 60, "nickm890@gmail.com", "UConn");

  expect(intern.getRole()).toEqual("Intern");
});
