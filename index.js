// declare requirements and also other variables //
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createHTML = require("./src/template.js")
const arrayForTeam =[];


// create a first question array for the prompts of the manager //
const managerQuestionsArray = 
        [
        {
        type: "input",
        name: "managername",
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
            name: "managerid",
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
            name: "manageremail",
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
            name: "manageroffice",
            message: "What is office number of your team manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the office number of your team manager.")
                    
                }
            }
        }
        ];

    
// create array for the Intern/Engineer specific questions //
const employeeQuestionsArray = 
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
             else console.log("Please enter the GitHub username of this employee.")
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

    

    // This function is used to select which type of position //
    // and to punctuate the code and force it back to the prompt, once finished. //
    function askTeamPosition() {
    return inquirer.prompt([
     {
     type: "list",
     message: "What type of employee would you like to add to your team?",
     name: "employeetype",
     choices: ["Manager", "Engineer", "Intern", "No additional team members."]
     }]).then(function (userInput) {
        switch(userInput.employeetype) {
            case "Manager":
                renderManager();
                break;
            case "Engineer":
                renderEngineer();
                break;
            case "Intern":
                renderIntern();
                break;

            default: htmlCreator();
        }
     })
 }

            askTeamPosition();
            
            if ((input) => input.position === "Manager") {
                renderManager();
            } else if ((input) => input.position === "Engineer") {
                renderEngineer();
            } else if((input) => input.position === "Intern") {
                renderIntern();
            } else return htmlCreator();

            function renderManager() {
                inquirer.prompt(managerQuestionsArray)
            (answers => {
                
                const manager = new Manager(answers.managername, answers.managerid, answers.manageremail, answers.office);
                arrayForTeam.push(manager);
                askTeamPosition();
            });
            }

            function renderEngineer() {
                inquirer.prompt(employeeQuestionsArray);
                if ((input) => input.position === "Engineer") {
                    (answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        arrayForTeam.push(engineer)
                        askTeamPosition();
                    });
                } 
                }

                function renderIntern() {
                    inquirer.prompt(employeeQuestionsArray);
                    if ((input) => input.position === "Intern") {
                        (answers => {
                            const intern = new Intern(answers.name, answers.id, answers.email, answers.education)
                            arrayForTeam.push(intern);
                            askTeamPosition()
                        });
                    }
                }    

                // This writes the file //
                function htmlCreator () {
                    fs.writeFileSync(outputPath, createHTML(arrayForTeam), "UTF-8")
                    console.log("Created Team Profile!")
                }
                
                

                
            

            
