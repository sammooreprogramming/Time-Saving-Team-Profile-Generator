// requirement 
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
// super calls parent's constructor
        super (name, id, email);
        this.github = github;
    }
// return from the user's input
getGithub () {
    return this.github;
}
// makes sure the selected employee type is an engineer
getPosition () {
    return "Engineer";
}
}

module.exports = Engineer
