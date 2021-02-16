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
function generateMarkdown(data) {
  const markDown = `# ${data.title} \
  # Description \
  ${data.description} \
  ## Installation \
  ${data.install} \
  ### Usage \
  ${data.instructions} \
  #### License \
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
