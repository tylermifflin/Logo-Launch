// import Circle, Square, Triangle from './shapes';
const { describe } = require('yargs');
const { Circle, Square, Triangle } = require('./shapes');

// unit test for circle 
describe('Circle', () => {
const shape = new Circle();

// unit test for square
describe('Square', () => {
const shape = new Square();

// unit test for triangle
describe('Triangle', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

