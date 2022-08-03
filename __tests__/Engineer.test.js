// Engineer constructor required. //
const Engineer = require('../lib/Engineer');

// Tests this to see if the program is able to create a github username. //
test("Tests whether a github is able to be created", () => {
    const githubExampleTest = "sammooreprogramming";
    const engineer = new Engineer("Sasuke Uchiha", 2, "sasukeuchiha@konohamail.com", githubExampleTest);
// This test expects the github username to equal a string.
    expect(typeof(engineer)).toEqual("object");
});

// This will retrieve the github username from the engineer. //
test("Tests whether the github username is retrieved.", () => {
    const githubExampleTest = "sammooreprogramming";
    const engineer = new Engineer("Sasuke Uchiha", 2, "sasukeuchiha@konohamail.com", githubExampleTest);
// This test expects the github username to be found by the program. //
    expect(engineer.getGithub()).toEqual(githubExampleTest);
});

// This tests for the position of the engineer. //
test("This tests for the position of the employee", () => {
    const confirmation = "Engineer";
    const githubExampleTest = "sammooreprogramming";
    const employee = new Engineer("Sasuke Uchiha", 2, "sasukeuchiha@konohamail.com", githubExampleTest);

    expect(employee.getPosition()).toEqual(confirmation);
});