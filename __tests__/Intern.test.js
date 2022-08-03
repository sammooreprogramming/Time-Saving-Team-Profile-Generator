// constant Employee is required for functionality //
const Intern = require("../lib/Intern");


// Tests to see if the application can  //
test("Tests to see if the program can set the intern's school")
const exampleValue = "SMU";
const employee = new Intern("Sam", 1, "testemail@gmail.com", exampleValue);

expect(employee.getEducation()).toBe(exampleValue);

//  //