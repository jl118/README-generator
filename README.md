# README Generator
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/jl118/README-generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/jl118/README-generator?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  
  ## Description 

  Every good project needs a quality Markdown file with information about how and why it was made, how others can use and contribute to it, who helped create it, and what license it falls under. 
  
  This is a command-line application that utilizes Node.js to dynamically generate a basic README.md file based on user input about the project. 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  
  *Steps required to install project:*
  
  To generate your own README, the first step is to clone the repo. 
  
  Next, run `npm install` to install the required package dependencies specified in the `package.json`:
    * [`inquirer`](https://www.npmjs.com/package/inquirer) will prompts for user inputs from the command line.
    * [`axios`](https://www.npmjs.com/package/axios) fetches information from the GitHub API to populate badges and contact information.
  
  Finally, run the program with `node index.js` in the command line. Each answer will populate in the correct section and a table of contents containing the proper sections will be included.
  
  ## Usage 
  
  When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

  The application then takes your responses and uses `axios` to fetch your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub email and the top language used in the project.

  From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the `inquirer` prompts (so, if you don't answer the optional questions, such as testing, an Tests section will not be included in your README). The README will also include a badge for the license the project falls.

  Finally, `fs.writeFile` is used to generate your project's README.md file.

  [![README Generator Demo](./media/README-generator-demo.gif)](https://drive.google.com/file/d/1iGmKHUsnylhxjes7gOFQPEOp-3H4Q7G-/view)
  
  
    
  ## License
 
  This project is under the MIT license.
  
  ---
  
  ## Questions?
  
  If you have any questions or would like to contribute, please contact me here:
 
  GitHub: [@jl118](https://api.github.com/users/jl118)
  
  Email: jen.liebelt@gmail.com
  