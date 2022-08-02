// requirement
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, education) {
// super calls parent's constructor (Employee constructor)
        super (name, id, email, education);
        this.education = education;
    }

// return from the user's input
getEducation () {
    return this.school;
    }

// makes sure the selected employee type is intern
getPosition () {
        return "Intern"
    }
}

module.exports = Intern;
