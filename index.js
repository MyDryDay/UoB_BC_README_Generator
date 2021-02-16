// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Write a description of the project: ",
    "Provide installation instructions for your project: ",
    "How do you use the application associated with your project?",
    "Which license does the project fall under?",
    "Please enter any contribution guidelines you may have: ",
    "Please describe any testing you have carried out on your project: ",
    "Please enter your contact information should anyone have any questions: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
