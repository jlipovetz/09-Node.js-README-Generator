// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./utils/generateMarkdown')
const renderLicense = require('./utils/generateMarkdown')
const renderMITLicense = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = ["What is the title of your README?", "What is the description of your README?", "What are the installation instruction for your README?", "What is the usage information for your README?", "What are the testing instructions for your README?", "What license will you be using for your README?", "What license badge will you be using for your README?", "What is your GitHub username?", "What is your email address?"];

const license = ["MIT", "Apache", "Mozilla"]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'testing',
      message: questions[4],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[5],
      choices: license,
    },
    {
      type: 'list',
      name: 'badge',
      message: questions[6],
      choices: license,
    },
    {
      type: 'input',
      name: 'username',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[8],
    },
  ])
    .then((data) => {
      if (data.license === "MIT" && data.badge === "MIT")
        data.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      data.license = "[MIT License](https://choosealicense.com/licenses/mit/)"
      if (data.license === "Apache" && data.badge === "Apache")
        data.badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
      data.license = "[Apache License](https://opensource.org/licenses/Apache-2.0)"
      if (data.license === "Mozilla" && data.badge === "Mozilla")
        data.badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
      data.license = "[Mozilla License](https://opensource.org/licenses/MPL-2.0)"
      const readMeContent = generateHTML(data);
      fs.writeFile('NEW.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!'))
    })
}

// Function call to initialize app
init();
