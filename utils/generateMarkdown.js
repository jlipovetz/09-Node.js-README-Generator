// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(data) {
  if (data.license === "MIT" && data.badge === "MIT")
    return renderMITLicense;
  else if (data.license === "Apache" && data.badge === "Apache")
    return renderApacheLicense;
  else (data.license === "Mozilla" && data.badge === "Mozilla")
  return renderApacheLicense;

}

function renderMITLicense(data) {
  data.badge = "[![MIT License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  data.license = "https://choosealicense.com/licenses/mit/"
  return generateMarkdown(data)
}

function renderApacheLicense(data) {
  data.badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  data.license = "https://opensource.org/licenses/Apache-2.0"
}

function renderMozillaLicense(data) {
  data.badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  data.license = "https://opensource.org/licenses/Apache-2.0"
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${data.badge}
  ## Description
  ${data.description}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Testing
  ${data.testing}
  ## License
  ${data.license}
  ## Questions
  Find me on [GitHub](https://github.com/${data.username})

  OR 
  [Email Us](${data.email})


`;
}

module.exports = generateMarkdown, renderMITLicense, renderApacheLicense, renderLicense, renderMozillaLicense;
