// Shape class constructor
class Shape {
    constructor () {
        this.header = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        this.footer = `</svg>`;
    }
}

// Circle
class Circle extends Shape {
    constructor (color) {
        super();
        this.color = color;
        this.setColor = function (userColor) {
            color = userColor;
        }
        this.render = function () {
            return `<circle cx="150" cy="110" r="80" fill="${color}" />`;
        };
    }
}

// Square
class Square extends Shape {
    constructor (color) {
        super();
        this.color = color;
        this.setColor = function (userColor) {
            color = userColor;
        }
        this.render = function () {
            return `<rect x="75" y="35" width="150" height="150" fill="${color}" />`;
        };
    }
}

// Triangle
class Triangle extends Shape {
    constructor (color) {
        super();
        this.color = color;
        this.setColor = function (userColor) {
            color = userColor;
        }
        this.render = function () {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
        };
    }
}

exports.Circle = Circle;
exports.Square = Square;
exports.Triangle = Triangle;
