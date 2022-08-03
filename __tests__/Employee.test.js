// constant Employee is required for functionality //
const Employee = require("../lib/Employee");

// tests whether or not an object is created //
test("Checks for the required information in Employee object", () => {
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
    const object = "object";
    expect(typeof(employee)).toBe(object);
})

// name is tested for functionality correctness //
test("Tests for the name of the employee", () => {
    const name = "Naruto";
    const employee = new Employee(name);
// using expect to get the user name input //
    expect(employee.name).toBe(name);
});

// ID is tested for functionality correctness //
test("Tests for the ID of the employee", () => {
    const id = 7;
    const employee = new Employee("Naruto", id);
// using expect to get the user ID input //
    expect(employee.id).toBe(id);
});

// email is tested for functionality correctness //
test("Tests for the email of the employee", () => {
    const email = "NarutoMail@konoha.com";
    const employee = new Employee("Naruto", 2, "NarutoMail@konoha.com");
// using expect to get the user email input //
    expect(employee.email).toBe(email);
});

// position is tested for functionality correctness //
test("Tests for the position of the employee", () => {
    const position = "Employee";
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user position input //
    expect(employee.getPosition()).toBe("Employee");
});

