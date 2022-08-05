// constant Employee is required for functionality //
const Employee = require("../lib/Employee");

// tests whether or not an Employee object is created //
const employee = new Employee("Naruto Uzumaki", () => {
// expectations of the test to be executed //
expect(employee.name).toBe("Naruto Uzumaki", 1, "narutoMail@konoha.com,");

expect(employee.id).toEqual(expect.any(Number));

expect(employee.email).toEqual(expect.any(String));
});


// Tests through all methods in the constructor function in lib file. //
test('Tests through all methods for Employee data confirmation.', () => {
    const employee = new Employee("Naruto Uzumaki", 11, "narutoMail@konoha.com,");
// expectations of the test to be executed //
    expect(employee.getName()).toEqual(employee.name);
    
    expect(employee.getId()).toEqual(employee.id);

    expect(employee.getEmail()).toEqual(employee.email);
    
    expect(employee.getPosition()).toEqual("Employee");
});