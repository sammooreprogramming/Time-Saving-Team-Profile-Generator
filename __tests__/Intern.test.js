// constant Employee is required for functionality //
const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

// Test should show a functioning constructor based school retrieval of education //
test("Tests to see if the program can set the intern's school")
const exampleValue = "SMU";
const employee = new Intern("Sam", 1, "testemail@gmail.com", exampleValue);

expect(employee.getEducation()).toBe(exampleValue);

// Test should show whether the program can set the education //
test("Test to see if the position can be retrieved from the intern's school", () => {
    const exampleValue = "Intern";
    const employee = new Intern("Sam", 1, "testemail@gmail.com", exampleValue)});

    expect(employee.getPosition()).toBe(exampleValue);

    test("Tests whether the program can set the education for Interns", () => {
        const exampleValue = "SMU";
        const employee = new Intern("Sam", 1, "testemail@gmail.com", exampleValue)
    })
    expect(employee.getEducation()).toBe(exampleValue);