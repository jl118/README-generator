// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {
  // generate table of contents based on userResponse
  let draftTable = `## Table of Contents`;

  if (userResponse.installation !== '') { draftTable += `
  * [Installation](#installation)` };

  if (userResponse.usage !== '') { draftTable += `
  * [Usage](#usage)` };

  if (userResponse.credits !== '') { draftTable += `
  * [Credits](#credits)` };

  if (userResponse.license !== '') { draftTable += `
  * [License](#license)` };

  if (userResponse.tests !== '') { draftTable += `
  * [Tests](#tests)`};

  if (userResponse.username !== '') { draftTable += `
  * [Questions](#questions)`};


  // generate markdown for the required portions of the README
  let draftMarkdown = 
  `# ${userResponse.projectTitle}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponse.username}/${userResponse.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  ${userResponse.description}
  `

  // add table of contents to markdown
  draftMarkdown += draftTable;
 
  // optional installation section
  if (userResponse.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project:*
  
  ${userResponse.installation}`
  };


  // usage section
  draftMarkdown +=
  `
  
  ## Usage 
  
  ${userResponse.usage}`;


  // optional credits section
  if (userResponse.credits !== '') {
  `
  
  ## Credits
  
  ${userResponse.credits}`
  };


  // license section
  draftMarkdown +=
  `
    
  ## License
 
  This project is under the ${userResponse.license} license.
  `;
 

  // optional tests section
  if (userResponse.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Command to run tests on this application:*
  
  ${userResponse.tests}`
  };


  // questions and developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me here:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // add email to Developer section
  draftDev +=
  `
  Email: ${userResponse.email}
  `;

  // add developer section to markdown
  draftMarkdown += draftDev;

  // return markdown
  return draftMarkdown;


}

module.exports = generateMarkdown;
