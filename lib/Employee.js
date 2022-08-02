// create class of Employee
class Employee {
    constructor(name, id, email) {
        this.name;
        this.id;
        this.email;
    }

// retrieve name from the input of the user
getName () {
    return this.name;
}
// retrieve email from the user input
getId () {
    return this.id;
}
// retrieve email from the user's input
getEmail () {
    return this.email;
}
// retrieve job position from the user's input
getPosition () 
{
    return "Employee";
}
}

module.exports = Employee;
