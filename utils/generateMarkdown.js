// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'GNU':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'Open':
      return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
      break;
    default:
      return '';
  }
};

// function to generate markdown for README
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

  ${renderLicenseBadge(userResponse.license)}
  
  
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
  
  If you have any questions or would like to contribute, please contact me here:
 
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
