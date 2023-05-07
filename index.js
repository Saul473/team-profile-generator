const inquirer = require('inquirer');
const fs = require('fs');
const renderHTML = require('./src/renderHTML');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const teamArray = [];

// const initialPrompt = () => {
//     return inquirer.prompt
//     ([
//         {
//             type: 'list',
//             name: 'occupation',
//             message: 'What would you like to do?',
//             choices: [
//                 'Add a Manager',
//                 'Add an Engineer',
//                 'Add an Intern'
//             ]
//         }
//     ])
//     .then(initialInput => {
//         if(initialInput.occupation == 'Add a Manager') {
//             addManager();
//         } else if (initialInput.occupation == 'Add an Engineer') {
//             addEngineer();
//         } else {
//             addIntern();
//         }
//     })
// }


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
            message: "Enter manager's ID"
        },
        {
            type: 'input',
            name: 'email',
            messgage: "Enter manager's email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number'
        },
        // {
        //     type: 'confirm',
        //     name: 'addAnotherEmployee',
        //     message: 'Would you like to add someone else to the team?',
        //     default: false
        // }
    ])
    // .then(managerInput => {
    //     const {name, id, email, officeNumber, addAnotherEmployee} = managerInput;
    //     const manager = new Manager (name, id, email, officeNumber);
    //     teamArray.push(manager);
    //     console.log(manager);

    //     if (addAnotherEmployee) {
    //         return initialPrompt(teamArray);
    //     } else {
    //         return teamArray
    //     }
    // })
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

// const addEngineer = () => {
//     return inquirer.prompt
//     ([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the engineer's name?"
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is the engineer's ID?"
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the engineer's email?"
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: "What is the engineer's GitHub?"
//         },
//         {
//             type: 'confirm',
//             name: 'addAnotherEmployee',
//             message: 'Would you like to add someone else to the team?',
//             default: false
//         }
//     ])
//     .then(engineerInput => {
//         const {name, id, email, github, addAnotherEmployee} = engineerInput;
//         const engineer = new Engineer (name, id, email, github);
//         teamArray.push(engineer);
//         console.log(engineer);

//         if (addAnotherEmployee) {
//             return initialPrompt(teamArray);
//         } else {
//             return teamArray
//         }
//     })
// }

// const addIntern = () => {
//     return inquirer.prompt
//     ([
//         {
//             type: 'input',
//             name: 'name',
//             message: "What is the intern's name?"
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: "What is the intern's ID?"
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: "What is the intern's email?"
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: "What school does the intern attend?"
//         },
//         {
//             type: 'confirm',
//             name: 'addAnotherEmployee',
//             message: 'Would you like to add someone else to the team?',
//             default: false
//         }
//     ])
//     .then(internInput => {
//         const {name, id, email, school, addAnotherEmployee} = internInput;
//         const intern = new Intern (name, id, email, school);
//         teamArray.push(intern);
//         console.log(intern);

//         if (addAnotherEmployee) {
//             return initialPrompt(teamArray);
//         } else {
//             return teamArray
//         }
//     })
// }

const addEmployee = () => {
    return inquirer.prompt
    ([
        {
            type: 'list',
            name: 'role',
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
            name: 'addAnotherEmployee',
            message: 'Would you like to add someone else to the team?',
            default: false
        }
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, addAnotherEmployee} = employeeData;
        let employee;

        if(role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        } else if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        }
        
        teamArray.push(employee);

        if(addAnotherEmployee) {
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
            console.log("Your team has been created successfully");
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