// Skeleton code for the template creation function //
const htmlTemplate = function(everyCard) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
    <script src="index.js"></script>
</head>
<body>
    <header>
    <p>Team Profile</p>
    </header>
    
    <main>
        <div>
            ${profileCards}
        </div>
    </main>
</body>
    `;
}


//  Manager card creation function //
const createManager = function (manager) {
    return `
<div id="container" class="col-md-3">
    <div id="manager-card">
        <div id="manager-card-header">
            <h4>${manager.name}</h4>
            <h3>Manager</h3>
        </div>

        <div id="manager-card-body">
            <p id="ID">ID: ${manager.id}</p>
            <p id="email">Email: <a href="mailto:${manager.getEmail()}">${manager.email}</a></p>
            <p id="office">Office Number: ${manager.office}</p>
        </div>
    </div>
</div>`;
}

// Engineer card creation function //
const createEngineer = function (engineer) {
    return `
<div id="container" class="col-md-3">
    <div id="engineer-card">
        <div id="engineer-card-header">
            <h4>${engineer.name}</h4>
            <h3>Engineer</h3>
        </div>

        <div id="engineer-card-body">
            <p id="ID">ID: ${engineer.id}</p>
            <p id="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p id="github">GitHub username: <a href="//github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
</div>
`;
}

// Intern card template //
const createIntern = function (intern) {
    return `
<div id="container" class="col-md-3">
    <div id="intern-card">
        <div id="intern-card-header">
            <h4>${intern.name}</h4>
            <h3>Engineer</h3>
        </div>

        <div id="intern-card-body">
            <p id="ID">ID: ${intern.id}</p>
            <p id="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p id="school">Education: ${intern.education}</p>
        </div>
    </div>
</div>
`;
}


// this will connect the cards to the HTML page. //
createHTML = (data) => {
    const generatedArray = [];
// for loop to iterate over the cards and create final array of data for the cards. //
 for (let i = 0; i < data.length; i++) {
// constant assignments // 
const worker = data[i];
const position = worker.getPosition();

// functions are called & pushed to a new final array with if statements. //
// Manager //
if (position === "Manager") {
    const cardManager  = createManager(worker);
    generatedArray.push(cardManager);
}
// Engineer //
if (position === 'Engineer') {
    const cardEngineer = createEngineer(worker);
    generatedArray.push(cardEngineer);
}

// Intern //
if (role === 'Intern') {
    const cardIntern = createIntern(worker);
    generatedArray.push(cardIntern);
}
 }

 //  //
 const allCards = generatedArray.join("");
}

const create

module.exports = createHTML;