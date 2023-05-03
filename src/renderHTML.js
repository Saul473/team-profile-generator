const renderManager = function(manager) {
    return `
    create manager card html
    `;
}

const renderIntern = function(intern) {
    return `
    create intern card html
    `;
}

const renderEngineer = function(engineer) {
    return `
    create engineer card html
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
    create team page html
    `;
}

module.exports = renderHTML;