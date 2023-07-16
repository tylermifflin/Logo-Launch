// import Circle, Square, Triangle from './shapes';
const { Circle, Square, Triangle } = require('./shapes');

// unit test for circle 
describe('Circle', () => {
    test('should return a circle with the color', () => {
        const circle = new Circle();
        let color = ('red')
        circle.setColor(color);
        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>');
    });
});

// unit test for square
describe('Square', () => {
    test('should return a square with the color', () => {
        const square = new Square();
        let color = ('blue')
        square.setColor(color);
        expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="${color}"/>');
    });
});
// unit test for triangle
describe('Triangle', () => {
    test('should return a triangle with the color', () => {
        const triangle = new Triangle();
        let color = ('green')
        triangle.setColor(color);
        expect(triangle.render()).toEqual('<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${color}"/>');
    });
});


