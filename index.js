const inquirer = require('inquirer');
const { writeSVG } = require('./lib/svgWriter');
const InputHandler = require('./lib/input');

async function init() {
    const inputHandler = new InputHandler();
    const userInput = await inputHandler.getUserInput();
    const svgContent = inputHandler.generateSVG(userInput);
    writeSVG(svgContent);
}

init();
