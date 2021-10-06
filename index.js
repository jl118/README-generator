// external packages and dependencies needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const api = require('./utils/api.js');

// array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle',
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("The title of your project is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is the name of this GitHub repo?',
            name: 'repo',
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("A valid repo name is required for a badge.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Write a brief description explaining the what, why, and how of your project.',
            name: 'description',
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("A description of your project is required.");
                }
                return true;
            }
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
            validate: function(answer) {
                if (answer.length < 1) {
                    return console.log("Instructions for use are required.");
                }
                return true;
            }
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
            message: 'If there are available commands to run tests for this application, enter them below:',
            name: 'tests',
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

// writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        } else {
            console.log("Success! Your README.md file has been generated.")
        }
    });
}

// async variable
const writeFileAsync = util.promisify(writeToFile);

// function to initialize app
async function init() {
    try {
        // user questions
        const userResponse = await promptUser();
        console.log("Your responses: ", userResponse);
        console.log("Fetching GitHub data...");

        // call GitHub api for user information
        const userInfo = await api.getUserInfo(userResponse);
        console.log("Your GitHub info: ", userInfo);

        // pass userResponses and GitHub info to generateMarkdown
        console.log("Generating your README.md file...");
        const markdown = generateMarkdown(userResponse, userInfo);

        // write markdown to file
        await writeFileAsync('README.md', markdown);
    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
