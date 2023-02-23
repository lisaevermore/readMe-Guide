const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Please name your Project.',
    },
    {
      type: 'input',
      name: 'creator',
      message: 'Your name?',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Give some description for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage',
    },
    {
      type: 'list',
      name: 'license',
      message: 'License',
      choices: ["MIT", "GNU GPL v3", "Apache 2.0", "Boost_1.0", "BSD 2-Clause", "Attribution License", "Other"]
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Did you work with anyone on this project? (Use GitHub usernames):',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Best way to reach you with some additional questions?',
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'URL GitHub:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Tests:',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Any Questions?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
