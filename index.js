// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Project Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Project Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Project Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required):',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please Enter your Project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions to install your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests you would like to include for your project:',
    }, 
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to provide a license for your project?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['Apache License', 'GNU General Public License', 'MIT License', 'BDS License', 'Creative Commons Zero Universal']
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// A function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// A function to initialize app
function init() {
    promptUser()
        .then(projectData => {
        return generateMarkdown(projectData);
        }).
        then(markdown => {
        return writeToFile('README.md', markdown);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
        console.log(err);
        });
};

// Function call to initialize app
init();

