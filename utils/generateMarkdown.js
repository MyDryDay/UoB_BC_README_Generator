// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
// [![GitHub license](https://img.shields.io/github/license/MyDryDay/${data.title}.svg)](https://github.com/MyDryDay/${data.title}/blob/main/LICENSE)`; 

  constlicenseLink=``;
  const gitLicense=data.license;

  switch(gitLicense){
    case `Apache 2.0`:
      licenseLink=`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case `GNU General Public 3.0`:
      licenseLink=`[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case `MIT`:
      licenseLink=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case `BSD 2-Clause`:
      licenseLink=`[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case `BSD 3-Clause`:
      licenseLink=`[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case `Creative Commons Zero v1.0`:
      licenseLink=`[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case `Eclipse Public 2.0`:
      licenseLink=`[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case `GNU Affero General Public v3.0`:
      licenseLink=`[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case `GNU General Public v2.0`:
      licenseLink=`[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case `Mozilla Public 2.0`:
      licenseLink=`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case `The Unlicense`:
      licenseLink=`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    case `No License`:
      licenseLink=``;
      break;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(data);


  const markDown = `# ${data.title} \
  # Description \
  ${data.description} \
  ## Installation \
  ${data.install} \
  ### Usage \
  ${data.instructions} \
  #### License ${licenseLink} \
  ${data.license} \
  renderLicenseLink(); \
  renderLicenseSection(); \
  ##### Contributing \
  ${data.contribute} \
  ###### Testing \
  ${data.test} \
  ###### Questions \
  ${data.contact}`;
  console.log(markDown);
}

module.exports = generateMarkdown;
