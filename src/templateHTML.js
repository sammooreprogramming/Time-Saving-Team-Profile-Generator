// Begin with Manager card creaton function //
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
const createIntern = function (engineer) {
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



// create a function to create an HTML page //
profileArray = [];

