// Engineer constructor required. //
const Engineer = require('../lib/Engineer');

// Tests this to see if the program is able to create an Engineer object from the constructor. //
test("Tests the construnctor function's ability to make an Engineer object", () => {
    const employee = new Engineer("Sasuke Uchiha", 11, "sasuke@konohamail.com", "Sauske");
// Test run through the expectations //
    expect(employee.name).toBe("Sasuke Uchiha");

    expect (employee.id).toEqual(expect.any(Number()));

    expect(employee.email).toEqual(expect.any(String));

    expect (employee.github).toEqual(expect.any(String));
});

test("Tests through the methods of the constructor function in the lib file.", () => {
    const employee = new Engineer("Sasuke Uchiha", 11, "sasuke@konohamail.com", "Sauske");
// Tests through the methods with expectations clear //
    expect(employee.getName()).toEqual(employee.name);

    expect(employee.getId()).toEqual(employee.id);

    expect(employee.getEmail()).toEqual(employee.email);

    expect(employee.getGithub()).toEqual(employee.github);

    expect(employee.getPosition()).toBe("Engineer");
  });