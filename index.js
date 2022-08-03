// declare requirements and also other variables
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const arrayOfSquad = [];

// create a first question for the prompts
function renderApp () {

    function arrayFirstQuesion () {
        inquirer.prompt({
            type: "list",
            name: "position",
            message: "Please select a position for your team member.",
            choices: ["Manager, Engineer", "Intern", "End Team"]
        })
    }
 
    function managerPrompt() {

       [
            {
            type: "input",
            name: "managersname",
            message: "What is the name of your team manager?",
            when: (input) => input.name === "Manager",
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
                name: "managerid",
                message: "What is employee ID of your team manager?",
                when: (input) => input.id === "Manager",
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
                name: "manageremail",
                message: "What is email address of your team manager?",
                when: (input) => input.email === "Manager",
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
                name: "manageroffice",
                message: "What is office number of your team manager?",
                when: (input) => input.office === "Manager",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the office number of your team manager.")
                        
                    }
                }
            }
        ]
        }
    }
    
    

    // create array for the employee specific questions
    function employeePrompt () {
        [
        {
        type: "input",
        name: "name",
        message: "Please enter the name of this employee.",
        when: (input) => input.position === "Engineer" || "Intern",
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
        when: (input) => input.position === "Engineer" || "Intern",
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
        when: (input) => input.position === "Engineer" || "Intern",
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
        ];

        arrayFirstQuestion();

        if (arrayFirstQuestion.answers.position === "Manager") {
            return inquirer.prompt(arrayManagerQuestions);

        } else if (arrayFirstQuestion.answers.position === "Engineer" || "Intern") {
            return inquirer.prompt(arrayEmployeeQuestions);
            
        } else console.log("Team Concluded.");

    }
        

 

// renderApp();