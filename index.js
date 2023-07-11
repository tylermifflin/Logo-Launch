const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = ["What text would you like to add? (enter 1-3 characters)", "What color do you want your text to be? (use keyword or hexadecimal number)",
 "Do you want to use a circle, square, or triangle?", "What color do you want your shape to be? (use keyword or hexadecimal number)"];


