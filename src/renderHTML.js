const renderManager = function(manager) {
    return `
    <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="./images/manager-icon.png">
          <h2 class="card-title black">Manager</h2>
        </div>
        <div class="card-content">
        <p class="name">Name: ${manager.name}</p>
          <p class="id">Employee ID: ${manager.id}</p>
          <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
  </div>
    `;
}

const renderIntern = function(intern) {
    return `
    <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="./images/intern-icon.png">
          <h2 class="card-title black">Intern</h2>
        </div>
        <div class="card-content">
          <p class="id">Employee ID: ${intern.id}</p>
          <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="school">School: ${intern.school}</p>
        </div>
      </div>
    </div>
  </div>
    `;
}

const renderEngineer = function(engineer) {
    return `
    <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="./images/engineer-icon.png">
          <h2 class="card-title black">Engineer</h2>
        </div>
        <div class="card-content">
          <p class="name">Name: ${engineer.name}</p>
          <p class="id">Employee ID: ${engineer.id}</p>
          <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
      </div>
    </div>
  </div>
    `;
}

renderHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === "Manager") {
            const managerCard = renderManager(employee);
            pageArray.push(managerCard);
        }

        if(role === "Intern") {
            const internCard = renderIntern(employee);
            pageArray.push(internCard);
        }

        if(role === "Engineer") {
            const engineerCard = renderEngineer(employee);
            pageArray.push(engineerCard);
        }
    }
    
    const employeeCards = pageArray.join('');
    const renderTeam = renderTeamPage(employeeCards);
    return renderTeam
};

const renderTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="./style.css"

</head>
<body>
    <header>
        <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">Your Team</a>
            </div>
          </nav>
    </header>
    <main>
        <div class="container">
            <div class="row" id="cards"> ${employeeCards}</div>
        </div>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
`;
}

module.exports = renderHTML;