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
        return <circle cx="25" cy="75" r="20"/>   
    }
}
