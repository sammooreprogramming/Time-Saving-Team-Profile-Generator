// required for functionality. //
const Manager = require("../lib/Manager");

// Tests for all of the Manager creation propreties //
test("Tests new Manager generation", () => {
// returns new Manager object //
    const employee = new Manager("Naruto Uzumaki", 1, "NarutoMail@konohamail.com", 1);
// Statement is expected to return the name of the manager //
    expect(employee.name).toBe("Naruto Uzumaki");
// Statement is expected to return the ID of the manager //
    expect(employee.id).toEqual(expect.any(Number));
// Statement is expected to return the email of the manager //
    expect(employee.email).toEqual(expect.any(String));
// Statement is expected to return the office of the manager //
    expect(employee.office).toEqual(expect.any(Number));
});

test("Tests through the methods in the lib folder", () => {
    const employee = new Manager("Naruto Uzumaki", 1, "NarutoMail@konohamail.com", 1);
// Statement is expected to return through the methods in the lib folder //
    expect(employee.getName()).toBe(employee.name);

    expect(employee.getId()).toBe(employee.id);

    expect(employee.getEmail()).toBe(employee.email);

    expect(employee.getOffice()).toBe(employee.office);

    expect(employee.getPosition()).toBe("Manager")
});