// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
// [![GitHub license](https://img.shields.io/github/license/MyDryDay/${data.title}.svg)](https://github.com/MyDryDay/${data.title}/blob/main/LICENSE)`; 

  switch(license){
    case `Apache 2.0`:
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)`;
      break;
    case `GNU General Public 3.0`:
      return `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case `MIT`:
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)`;
      break;
    case `BSD 2-Clause`:
      return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)(https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case `BSD 3-Clause`:
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case `Creative Commons Zero v1.0`:
      return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)(http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case `Eclipse Public 2.0`:
      return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)(https://opensource.org/licenses/EPL-1.0)`;
      break;
    case `GNU Affero General Public v3.0`:
      return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)(https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case `GNU General Public v2.0`:
      return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)(https://opensource.org/licenses/EPL-1.0)`;
      break;
    case `Mozilla Public 2.0`:
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)`;
      break;
    case `The Unlicense`:
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)`;
      break;
    default:
      return ``;
      break;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case `Apache 2.0`:
      return `\nProject created using the Apache 2.0 license.\n[Learn more...](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case `GNU General Public 3.0`:
      return `\nProject created using the GNU General Public 3.0 license.\n[Learn more...](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case `MIT`:
      return `\nProject created using the MIT license.\n[Learn more...](https://opensource.org/licenses/MIT)`;
      break;
    case `BSD 2-Clause`:
      return `\nProject created using the BSD 2-Clause license.\n[Learn more...](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case `BSD 3-Clause`:
      return `\nProject created using the BSD 3-Clause license.\n[Learn more...](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case `Creative Commons Zero v1.0`:
      return `\nProject created using the Creative Commons Zero v1.0 license.\n[Learn more...](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case `Eclipse Public 2.0`:
      return `\nProject created using the Eclipse Public 2.0 license.\n[Learn more...](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case `GNU Affero General Public v3.0`:
      return `\nProject created using the GNU Affero General Public v3.0 license.\n[Learn more...](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case `GNU General Public v2.0`:
      return `\nProject created using the GNU General Public v2.0 license.\n[Learn more...](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case `Mozilla Public 2.0`:
      return `\nProject created using the Mozilla Public 2.0 license.\n[Learn more...](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case `The Unlicense`:
      return `\nProject created using the The Unlicense license.\n[Learn more...](http://unlicense.org/)`;
      break;
    default:
      return ``;
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=="NONE"){
    let typeOfLicense=`#### License ${renderLicenseBadge(license)} \n ${renderLicenseLink(license)}`;
    return typeOfLicense;
  }else{
    ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  # Description
  ${data.description}

  ## Contents
  Section                       | Description
  ----------------------------- | --------------------------------------------------
  [Installation](#Installation) | How To Install & Dependancies
  [Usage](#Usage)               | How To Use The Application
  [Contributing](#Contributing) | Information For Those That Wish To Contribute
  [Testing](#Testing)           | Information Regarding Tests I've Carried Out
  [Questions](#Questions)       | Contact Information For Those That Have Questions

  ## Installation
  ${data.install}

  ### Usage
  ${data.instructions}

  ${renderLicenseSection(data.license)}

  ##### Contributing
  ${data.contribute}

  ###### Testing
  ${data.test}

  ###### Questions
  ${data.contact}`;
}

module.exports = generateMarkdown;
