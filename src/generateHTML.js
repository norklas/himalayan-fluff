// Creation of Manager card
const generateManager = function (manager) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office-number">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
};

// Creation of Engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>

        </div>
    </div>
    `;
};

// Creation of Intern card
const generateIntern = function (intern) {
  return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>

        </div>
    </div>
    `;
};

// Push array to page
generateHTML = (data) => {
  // Array for employee cards
  pageArr = [];

  // Loop for array
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // Call generateManager
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      // Push to array
      pageArr.push(managerCard);
    }

    // Call generateEngineer
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      // Push to array
      pageArr.push(engineerCard);
    }

    // Call generateIntern
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      //Push to array
      pageArr.push(internCard);
    }
  }

  // Joining array
  const employeeCards = pageArr.join("");

  // Return to generated HTML
  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// Generate the HTML
const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center bg-danger" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!-- Team Cards -->
                    ${employeeCards}
                </div>
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

// Export
module.exports = generateHTML;
