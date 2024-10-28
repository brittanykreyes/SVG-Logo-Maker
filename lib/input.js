const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

class InputHandler {
    async getUserInput() {
        const { text, textColor, shape, shapeColor } = await inquirer.prompt([
            { type: 'input', name: 'text', message: 'Enter text (up to 3 characters):', validate: (input) => input.length <= 3 },
            { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hex):' },
            { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
            { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hex):' },
        ]);
        return { text, textColor, shape, shapeColor };
    }

    generateSVG({ text, textColor, shape, shapeColor }) {
        let shapeObj;
        switch (shape) {
            case 'Circle':
                shapeObj = new Circle();
                break;
            case 'Triangle':
                shapeObj = new Triangle();
                break;
            case 'Square':
                shapeObj = new Square();
                break;
        }
        shapeObj.setColor(shapeColor);
        return `
        <svg width="300" height="200">
            ${shapeObj.render()}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="24">${text}</text>
        </svg>`;
    }
}

module.exports = InputHandler;
