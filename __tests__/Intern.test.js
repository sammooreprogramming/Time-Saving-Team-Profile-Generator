// constant Employee is required for functionality //
const Intern = require("../lib/Intern");

// Intern object functionality test //
test("Tests the functionality of the Intern object", () => {
    const employee = new Intern("Naruto Uzumaki", 1, "NarutoMail@konoha.com", "SMU")
// Statement is expected to return the name of the Intern //
    expect(employee.name).toBe("Naruto Uzumaki");
// Statement is expected to return the ID of the Intern //
    expect(employee.id).toEqual(expect.any(Number));
// Statement is expected to return the emailaddress of the Intern //
    expect(employee.email).toEqual(expect.any(String));
// Statement is expected to return the education of the Intern //
    expect(employee.education).toEqual(expect.any(String));
})

// Test runs through each method related to the Intern //
test("Tests all methods related to intern class", () => {
    const employee = new Intern("Naruto Uzumaki", 1, "NarutoMail@konoha.com", "SMU");

    expect(employee.getName()).toBe(employee.name);

    expect(employee.getId()).toBe(employee.id);

    expect(employee.getEmail()).toBe(employee.email);

    expect(employee.getEducation()).toBe(employee.school);

    expect(employee.getPosition()).toBe("Intern");
});