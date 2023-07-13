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


// unit test for triangle


