// constant Employee is required for functionality
const Employee = require("../lib/Employee");
// tests whether or not an object is created
test("checks for the required information for the Employee", function () {
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to show the 
    expect(employee.name).toEqual(expect.any(String));
    excpect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
   
})

// name is tested for functionality correctness
test("Tests for the name of the employee",function () {
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user name input
    expect(employee.getName()).toEqual(expect.any(String));
});

// ID is tested for functionality correctness
test("Tests for the ID of the employee",function () {
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user ID input
    expect(employee.getId()).toEqual(expect.any(Number));
});

// email is tested for functionality correctness
test("Tests for the email of the employee",function () {
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user email input
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// position is tested for functionality correctness
test("Tests for the position of the employee",function () {
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user position input
    expect(employee.getPosition()).toEqual(expect.any(String));
});