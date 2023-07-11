// import Circle, Square, Triangle from './shapes';
const { Circle, Square, Triangle } = require('./shapes');

// unit test for circle 
describe('Circle', () => {
const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="red" />');
});

// unit test for square
describe('Square', () => {
const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="50" y="50" width="50" height="50" fill="green" />');
});

// unit test for triangle
describe('Triangle', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

