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
function writeToFile(fileName, data) {
    
}

// A function to initialize app
function init() {
    promptUser()
        .then(projectData => {
        return generateMarkdown(projectData);
    }).then(markdown => {
        return writeToFile('README.md', markdown);
    })
    
}

// Function call to initialize app
init();



/*

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
  
  */
