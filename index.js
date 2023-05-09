const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./Assets/utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project'
    },

    {
        type: 'input',
        name:'Table of contents',
        message: 'Enter your contents table information'
    },

    {
        type:'input',
        name: 'Installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },

    {
        type: 'input',
        name:'Usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },


    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
      },

      {
        type:'input',
        name:'How to contribute',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you would prefer.'
      },

      {
        type: 'input',
        name: 'Tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
      },

      {
        type: 'input',
        name: 'Questions',
        message: 'What is your GitHub username'
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

];

// function to write README file
function writeToFile(fileName, data) {
   
    const outputPath = path.join(__dirname, fileName);

    // use the generateMarkdown function to create the README content
    const content = generateMarkdown(data);

    // adding GitHub username and email to "Questions" section
    if (data.github) {
        content += `\n## Questions\n\nGitHub: [${data.github}](https://github.com/${data.github})\n`;
    }

    if (data.email) {
        content += `\nEmail: ${data.email}\n`;
    }

    // write the README file
    fs.writeFile(outputPath, content, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("README.md file generated successfully!");
    });
}


// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers);
      fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README file generated successfully!');
      });
    });
}


// function call to initialize program
init();
