// create a shape class that can be used to import the color, text, and text color depending on the user's input
class Shape { 
    constructor(color) {
        this.color = color;
    }
    // set the color of the shape
    setColor(color) {
        this.color = color;
    }
    // set the text of the shape
    setText(text) {
        this.text = text;
    }
    // set the text color of the shape
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    // return the color, text, and text color of the shape
    render() {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

// create a class for a circle that will inherit the shape class using svg to create a circle
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    // return the circle with the color
    render() {
        return '<circle cx="25" cy="75" r="20" fill="${response.shapeColor}" />';  
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
