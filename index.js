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
    const color = response.color;
    const textColor = response.textColor;
    const text = response.text;
    let svgtemplate = "";
    svgtemplate += `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">`;
    svgtemplate += "<g>";
    // get the shape and color from the response.shape and response.color
    let shapeObj;
    if (shape === "circle") {
        shapeObj = new Circle();
    } else if (shape === "square") {
        shapeObj = new Square();
    } else if (shape === "triangle") {
        shapeObj = new Triangle();
    }
    shapeObj.setColor(color);
    svgtemplate += shapeObj.render();
    
    // get the text and text color from the response.text and response.textColor
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
            name: 'color',
            message: questions[3],
        },
    ])
    .then((response) => {
        createSVG(response);
    }
    );

// call the startprompt function
startprompt();




