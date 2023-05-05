const inquirer = require('inquirer');
const fs = require('fs');

// List of shapes
const shapes = ['circle', 'square', 'triangle'];

// Array of questions used in inquirer prompt
const questions = [
    {
        type: 'text',
        message: 'Enter up to 3 characters:',
        name: 'chars'
    },
    {
        type: 'text',
        message: 'Enter a color:',
        name: 'color'
    },
    {
        type: 'list',
        message: 'Select a shape:',
        name: 'shape',
        choices: shapes
    },
    {
        type: 'text',
        message: 'Enter a unique name for your SVG file.',
        name: 'fileName'
    }
];

// Create the logo and save to a file
function drawSVG(data) {
    var content = '';

    fs.writeFile(data.fileName, content, function (err) {
        err ? console.log(err) : console.log("Success");
    });
}

// Initiate the application
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            drawSVG(data);
        })
}

init();