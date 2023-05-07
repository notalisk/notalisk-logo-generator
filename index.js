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
        message: 'Enter a color (either a valid color name or a hexadecimal starting with #):',
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

function validateResponse(data) {
    // Check that number of characters is not greater than 3
    if (data.text.length > 3) {
        console.log('ERROR');
        console.log('You entered too many characters, please try again (run the file again).');
        return;
    }

    // If all is good, call the draw function
    drawSVG(data);
}

// Create the logo and save to a file
function drawSVG(data) {

    switch(data.shape) {
        case 'circle':
            myShape = new classes.Circle(data.color);
            break;
        case 'square':
            myShape = new classes.Square(data.color);
            break;
        case 'triangle':
            myShape = new classes.Triangle(data.color);
            break;
    }

    var content = `${myShape.header} ${myShape.render()} <text x="150" y="125" font-size="45" text-anchor="middle" fill="white">${data.text}</text> ${myShape.footer}`;

    fs.writeFile(`${data.fileName}.svg`, content, function (err) {
        err ? console.log(err) : console.log("Success");
    });
}

// Initiate the application
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            validateResponse(data);
        })
}

init();