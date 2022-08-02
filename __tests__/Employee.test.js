const Employee = require("../lib/Employee");

test("Tests to see whether or not the object employee is created correctly", function () {

    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});
