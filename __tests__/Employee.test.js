// constant Employee is required for functionality //
const Employee = require("../lib/Employee");

// tests whether or not an object is created //
test("Checks for the creation of an Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

// name is tested for functionality correctness //
test("Tests for the name of the employee", () => {
    const employee = new Employee("Naruto Uzumaki");
    const name = "Naruto Uzumaki";
// using expect to get the user name input //
    expect(employee.name).toEqual(name);
});

// retrieves the name from the getName(). //
    test("Tests to see if the name is retrieved by the program", () => {
        const exampleName = "Sasuke Uchiha";
        const employee = new Employee(exampleName);

        expect(employee.getName()).toBe(exampleName);
    })


// ID is tested for functionality correctness //
test("Tests for the ID of the employee", () => {
    const employee = new Employee("Naruto Uzumaki", id);
    const id = 1;
// using expect to get the user ID input //
    expect(employee.id).toBe(id);
});

// retrieves the ID from the getID() method //
test("Tests to see if the name is retrieved by the program", () => {
    const exampleId = 1;
    const employee = new Employee("Naruto Uzumaki", exampleId)
})

// email is tested for functionality correctness //
test("Tests for the email of the employee", () => {
    const employee = new Employee("Naruto", 7, "NarutoMail@konoha.com");
    const email = "uzumakiMail@konoha.com"
// using expect to get the user email input //
    expect(employee.email).toBe(email);
});

// retrieves the email from the getEmail() method //
test("Tests to see if the email is retrieved by the program.", () => {
    const exampleEmail = "NarutoMail@konoha.com";
    const employee = new Employee("Naruto", exampleEmail)
})

// position is tested for functionality correctness //
test("Tests for the position of the employee", () => {
    const position = "Employee";
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user position input //
    expect(employee.getPosition()).toBe(position);
});

