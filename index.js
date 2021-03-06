const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

let questions = [
  {
    message: "What is the name of the project?",
    name: "title",
  },
  {
    message: "Please provide a table on content.",
    name: "table of content",
  },
  {
    message: "Please provide a description of the project.",
    name: "description",
  },
  {
    message: "What is the installation process?",
    name: "installation",
  },
  {
    message: "How will this project be used?",
    name: "usage",
  },
  {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU GPLv3', 'GNU GPL', 'MIT'],
    name: 'license'
  },
  {
    message: "Who were the contributors to this project?",
    name: "contribution",
  },
  {
    message: "What is the test process for this project?",
    name: "test",
  },
  {
  type: 'input',
  message: "What is your GitHub username? (No @ needed)",
  name: 'userName',
  },
  {
    message: "What is the user github email address?",
    name: "email",
  },
];

inquirer.prompt(questions).then((response) => {
  fs.writeFile("ReadMe2.md", generateMarkdown(response), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  });
});
