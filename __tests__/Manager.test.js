// required for functionality. //
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { default: test } = require("node:test");


// Tests for an office number from a constructor //
test("Tests for the office number from a constructor", () => {
    const exampleValue = 50;
    const employee = new Manager("employee", 50, "testmail@gmail.com", exampleValue);
    
    expect(employee.office).toBe(exampleValue);
});

// Tests for the retrieving of the office number. //
test("Tests for the office number being pulled from user input", () => {
    const exampleValue = 50;
    const employee = new Manager("employee", 50, "testmail@gmail.com", exampleValue);

    expect(employee.getOffice()).toBe(exampleValue);
});

// Tests for the Manager's position //
test("Tests for the Manager return by getPosition()", () => {
    const exampleValue = "Manager";
    const employee = new Manager("employee", 1, "testemail@gmail.com", exampleValue);
});