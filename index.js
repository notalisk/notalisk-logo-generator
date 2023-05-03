const inquirer = require('inquirer');
const fs = require('fs');

const shapes = ['circle', 'square', 'triangle'];

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
    }
];

function init() {
    inquirer
        .prompt(questions)
        .then()
}

init();