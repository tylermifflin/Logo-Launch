const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = ["What text would you like to add? (enter 1-3 characters)", "What color do you want your text to be? (use keyword or hexadecimal number)",
 "Do you want to use a circle, square, or triangle?", "What color do you want your shape to be? (use keyword or hexadecimal number)"];

 const startprompt = () =>
 inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: questions[0],
            validate: (text) => {
                if (text.length > 3) {
                    return 'Please enter 1-3 characters';
                }
        },
        },
        {
            type: 'input',
            name: 'textColor',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'shape',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: questions[3],
        },
    ])
    



