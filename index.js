// import inquirer and fs, and the shapes library
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// array of questions to use in inquirer
const questions = ["What text would you like to add? (enter 1-3 characters)", "What color do you want your text to be? (use keyword or hexadecimal number)",
 "Do you want to use a circle, square, or triangle?", "What color do you want your shape to be? (use keyword or hexadecimal number)"];

 // function to write the svg file using the shapes library
const createSVG = (response) => {
    const shape = response.shape;
    const shapeColor = response.shapeColor;
    const textColor = response.textColor;
    const text = response.text;
    let svgtemplate = "";
    svgtemplate += `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;
    svgtemplate += "<g>";
    // grab the shape from the response and create the shape

    if (response.shape === "circle") {
        const circle = new Circle();
        svgtemplate += circle.render();
    } else if (response.shape === "square") {
        const square = new Square();
        svgtemplate += square.render();
    } else if (response.shape === "triangle") {
        const triangle = new Triangle();
        svgtemplate += triangle.render();
    }

    svgtemplate += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;
    svgtemplate += "</g>";
    svgtemplate += "</svg>";

    fs.writeFile('logo.svg', svgtemplate, (err) =>
    err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
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
                return true;
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
    .then((response) => {
        createSVG(response);
    }
    );

// call the startprompt function
startprompt();




