// Importing Engineer constructor
const Engineer = require("../lib/Engineer");

// Testing engineer object creation
test("creates an Engineer object", () => {
  const engineer = new Engineer("Nick", 60, "nickm890@gmail.com", "norklas");

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

// Testing github from getGithub()
test("gets Engineer github", () => {
  const engineer = new Engineer("Nick", 60, "nickm890@gmail.com", "norklas");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

// Testing role from getRole()
test("get role of employee", () => {
  const engineer = new Engineer("Nick", 60, "nickm890@gmail.com", "norklas");

  expect(engineer.getRole()).toEqual("Engineer");
});
