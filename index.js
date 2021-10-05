// external packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle',
        },
        {
            type: 'input',
            message: 'Write a brief description explaining the what, why, and how of your project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project (if any)?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please provide examples and instructions for use:',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Which license does this project fall under?',
            choices: [
                'Apache',
                'Academic',
                'BSD',
                'GPL',
                'GNU',
                'MIT',
                'Mozilla',
                'Open',
            ],
            name: 'license',
        },
        {
            type: 'input',
            message: 'List: your collaborators, if any, with links to their GitHub profiles, third-party assets, and/or tutorial links.',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Please enter your email:',
            name: 'email',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
