// Sample Test
/*
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/

const classes = require('./shapes.js');

describe('Shape', () => {
    describe('Triangle', () => {
        it('should create a triangle of the proper color', () => {
            const shape = new classes.Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    })
});