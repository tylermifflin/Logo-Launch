// import inquirer and fs, and the shapes library
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// array of questions to use in inquirer
const questions = ["What text would you like to add? (enter 1-3 characters)", "What color do you want your text to be? (use keyword or hexadecimal number)",
 "Do you want to use a circle, square, or triangle?", "What color do you want your shape to be? (use keyword or hexadecimal number)"];

 // function to write the svg file using the shapes library
const createSVG = (response) => {
    const text = response.text;
    const textColor = response.textColor;
    const shape = response.shape;
    const shapeColor = response.shapeColor;
    if (shape === "circle") {
        const circle = new Circle();
        circle.setColor(shapeColor);
        circle.setText(text);
        circle.setTextColor(textColor); 
        const svg = circle.render();
        fs.writeFile('logo.svg', svg, (err) =>
        err ? console.log(err) : console.log('Successfully created image.svg!')
        );
    } else if (shape === "square") {
        const square = new Square();
        square.setColor(shapeColor);
        square.setText(text);
        square.setTextColor(textColor);
        const svg = square.render();
        fs.writeFile('logo.svg', svg, (err) =>
        err ? console.log(err) : console.log('Successfully created image.svg!')
        );
    } else if (shape === "triangle") {
        const triangle = new Triangle();
        triangle.setColor(shapeColor);
        triangle.setText(text);
        triangle.setTextColor(textColor);
        const svg = triangle.render();
        fs.writeFile('logo.svg', svg, (err) =>
        err ? console.log(err) : console.log('Successfully created image.svg!')
        );
    }
};
   
// function to prompt the user using inquirer
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




