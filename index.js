// declare requirements and also other variables
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const arrayTeam = [];

// create an array of questions for the manager
arrayManagerQuestions = [
    {
    type: "input",
    name: "name",
    message: "What is the name of your team manager?",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("Please enter the name of your team manager.")
            
        }
    }
    },
    {
        type: "input",
        name: "id",
        message: "What is employee ID of your team manager?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the employee ID of your team manager.")
                
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is email address of your team manager?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the email address of your team member.")
                
            }
        }
    },
    {
        type: "input",
        name: "office",
        message: "What is office number of your team manager?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the office number of your team manager.")
                
            }
        }
    }];
    

    // create array for the employee specific questions
    arrayEmployeeQuestions = [
    {
    type: "list",
    name: "position",
    message: "Please select a position for your team member.",
    choices: ["Engineer", "Intern", "End Team"]
    },
    {
    type: "input",
    name: "name",
    message: "Please enter the name of this employee.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("please enter the name of this employee.")
        } 
    }
    },
    {
    type: "input",
    name: "id",
    message: "please enter the ID of this employee.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("please enter the ID of this employee.")
        } 
    }
    },
    {
    type: "input",
     name: "email",
    message: "please enter the email of this employee.",
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log("please enter the email of this employee.")
        } 
    }
    },
    {
    type: "input",
    name: "GitHub",
    message: "Please enter the GitHub username of this employee.",
    when: (input) => input.position === "Engineer",
    validate: nameInput => {
        if (nameInput) 
            return true;
        } 
    },
    {
    type: "input",
    name: 'education',
    message: "Please enter the university or the education of this intern.",
    when: (input) => input.position === "Intern",
    validate: nameInput => {
        if (nameInput) {
            return true;
            } else {
                console.log ("Please enter the university or the education of this intern.")
            }
        }
    },
    {
    type: "confirm",
    name: "finish",
    message: "Are you finished creating your team?",
    default: false
    }
    ];
