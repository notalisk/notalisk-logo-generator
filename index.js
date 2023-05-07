const inquirer = require('inquirer');
const fs = require('fs');

const classes = require('./lib/shapes.js');

// List of shapes
const shapes = ['circle', 'square', 'triangle'];

// Array of questions used in inquirer prompt
const questions = [
    {
        type: 'text',
        message: 'Enter up to 3 characters:',
        name: 'text'
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

var myShape = {};

// Create the logo and save to a file
function drawSVG(data) {
    console.log(data);

    switch(data.shape) {
        case 'circle':
            myShape = new classes.Circle(data.color, data.text);
            break;
        case 'square':
            myShape = new classes.Square(data.color, data.text);
            break;
        case 'triangle':
            myShape = new classes.Triangle(data.color, data.text);
            break;
    }

    var content = `${myShape.header} ${myShape.code} <text x="100" y="125" font-size="45" fill="white">${data.text}</text> ${myShape.footer}`;

    fs.writeFile(`${data.fileName}.svg`, content, function (err) {
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