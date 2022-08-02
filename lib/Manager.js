// requirement
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
// super calls the parent's constructor
        super(name, id, email,);
        this.office = office;
    }
    
// return from the user's input
getOffice() {
        return this.office;
    }

// makes sure the selected employee type is manager
getPosition() {
    return "Manager";
}
}

module.exports = Manager;
