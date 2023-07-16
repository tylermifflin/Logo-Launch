// create a shape class that can be used to import the color, text, and text color depending on the user's input
class Shape { 
    constructor() {
        this.color = '';
    }
    // set the color of the shape
    setColor(color) {
        this.color = (color);
    }
}


// create a class for a circle that will inherit the shape class using svg to create a circle
class Circle extends Shape {
    // return the circle with the color
    render() {
        return '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>';
    }
}

// create a class for a square that will inherit the shape class using svg to create a square
class Square extends Shape {
    // return the square with the color
    render() {
        return '<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>';
    }
}

// create a class for a triangle that will inherit the shape class using svg to create a triangle
class Triangle extends Shape {
    // return the triangle with the color
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>';
    }
}

// export the classes to be used in the index.js file
module.exports = { Circle, Square, Triangle };
