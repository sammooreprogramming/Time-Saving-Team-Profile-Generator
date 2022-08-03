// constant Employee is required for functionality //
const Employee = require("../lib/Employee");

// tests whether or not an object is created //
test("Checks for the creation of an Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toEqual("object");
})


// name is tested for functionality correctness from constructor function //
test("Tests for the name of the employee", () => {
    const name = "Sasuke Uchiha";
    const employee = new Employee();
// using expect to write test parameters the user name input //
    expect(employee.name).toBe(name);
});


// retrieves the name from using the getName() method. //
    test("Tests to see if the name is retrieved by the program", () => {
        const testName = "Sasuke Uchiha";
        const employee = new Employee(testName);
// using expect to make the testName be retrieved by the program //
        expect(employee.getName()).toBe(testName);
    })


// ID is tested for functionality correctness //
test("Tests for the ID of the employee", () => {
    const id = 1;
    const employee = new Employee("Naruto Uzumaki", id);
// using expect to get the user ID input //
    expect(employee.id).toBe(id);
});


// retrieves the ID from the getID() method //
test("Tests to see if the name is retrieved by the program", () => {
    const exampleId = 1;
    const employee = new Employee("Naruto Uzumaki", exampleId)
// using expect to using expect to make the testName be retrieved by the program //
expect(employee.getName()).toBe(exampleId); 
})


// email is tested for functionality correctness //
test("Tests for the email of the employee", () => {
    const employee = new Employee("Naruto", 1, "NarutoMail@konoha.com");
    const email = "uzumakiMail@konoha.com"
// using expect to get the user email input //
    expect(employee.email).toBe(email);
});


// retrieves the email from the getEmail() method //
test("Tests to see if the email is retrieved by the program.", () => {
    const exampleEmail = "NarutoMail@konoha.com";
    const employee = new Employee("Naruto", exampleEmail)
    //  //
    expect(employee.getEmail()).toBe(exampleEmail);
})


// position is tested for functionality correctness //
test("Tests for the position of the employee", () => {
    const position = "Employee";
    const employee = new Employee("Naruto Uzumaki", 1, "NarutoMail@konoha.com");
// using expect to get the user position input //
    expect(employee.getPosition()).toBe(position);
});

