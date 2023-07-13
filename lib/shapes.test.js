// import Circle, Square, Triangle from './shapes';
const { Circle, Square, Triangle } = require('./shapes');

// unit test for circle 
describe('Circle', () => {
    test('should return a circle with the color', () => {
        const circle = new Circle();
        expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>');
    });
});

// unit test for square
describe('Square', () => {
    test('should return a square with the color', () => {
        const square = new Square();
        expect(square.render()).toEqual('<rect x="50" y="50" width="50" height="50" fill="${this.shapeColor}"/>');
    });
});
// unit test for triangle
describe('Triangle', () => {
    test('should return a triangle with the color', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>');
    });
});


