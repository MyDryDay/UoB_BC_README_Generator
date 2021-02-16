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

// Object Constructor function for each question
function Question(type, name, message, choices){
    this.type=type;
    this.name=name;
    this.message=message;
    this.choices=choices;
    this.questions=questions;
}

// Function to ask the questions via command prompt and store them in an object called data
function askQuestions(){

    inquirer.prompt([
        new Question("input", "title", questions[0]),
        new Question("input", "description", questions[1]),
        new Question("input", "install", questions[2]),
        new Question("input", "intructions", questions[3]),
        new Question("list", "license", questions[4], 
        ["Apache 2.0", "GNU General Public 3.0", "MIT", "BSD 2-Clause 'Simplified'", "BSD 3-Clause 'New' or 'Simplified'", "Boost Software 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public 2.0", "GNU Affero General Public v3.0", "GNU General Public v2.0", "GNU Lesser General Public v2.1", "Mozilla Public 2.0", "The Unlicense"]),
        new Question("input", "contribute", questions[5]),
        new Question("input", "test", questions[6]),
        new Question("input", "contact", questions[7]),
    ]).then(data => {
        console.log(JSON.stringify(data));
    });

}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    askQuestions(questions);
}

// Function call to initialize app
init();
