// Shape class constructor
function Shape(text) {
    this.header = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.text = `<text x="100" y="125" font-size="45" fill="white">${text}</text>`;
    this.footer = `</svg>`;
}

// Circle
function Circle(color, text) {
    Shape.call(this, text);
    this.circleCode = `<circle cx="150" cy="110" r="80" fill="${color}" />`;
}

// Square
function Square(color, text) {
    Shape.call(this, text);
    this.squareCode = `<rect x="75" y="35" width="150" height="150" fill="${color}" />`;
}

// Triangle
function Triangle(color, text) {
    Shape.call(this, text);
    this.triangleCode = `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
}