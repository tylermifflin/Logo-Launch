// create a shape class that can be used to import a color into each shape
class Shape { 
    constructor(color) {
    this.color = "";
}
    // create a function that will set the color of the shape
    setColor(colorinput) {
        this.color = colorinput;
    }
}

// create a class for a circle that will inherit the shape class using svg to create a circle
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    // return the circle with the color
    render() {
        return '<circle cx="25" cy="75" r="20" fill="${this.color}" />';  
    }
}

// create a class for a square that will inherit the shape class using svg to create a square
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    // return the square with the color
    render() {
        return '<rect x="50" y="50" width="50" height="50" fill="${this.color}" />';
    }
}

// create a class for a triangle that will inherit the shape class using svg to create a triangle
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    // return the triangle with the color
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>';
    }
}

// export the classes to be used in the index.js file
module.exports = { Circle, Square, Triangle };
