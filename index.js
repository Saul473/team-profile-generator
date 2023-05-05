const renderHTML = require("./src/renderHTML");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const inquirer = require("inquirer");
const teamArray = [];

const addManager = () => {
    return inquirer.prompt 
    ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID"
        },
        {
            type: 'input',
            name: 'email',
            messgage: "Enter employee's email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number'
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    return inquirer.prompt
    ([
        {
            type: 'list',
            name: 'name',
            message: "Select employee's role",
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter employee's GitHub username",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter intern's school",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add someone else to the team?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if(role === "Intern") {
            employee = new Intern (name, id, email, school);
        } else if(role === "Engineer") {
            employee = new Engineer (name, id, email, github)
        }
        
        teamArray.push(employee);
        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Profile has been added successfully");
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return renderHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
