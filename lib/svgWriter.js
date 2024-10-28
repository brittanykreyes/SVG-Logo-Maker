const fs = require('fs');

function writeSVG(svgContent) {
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

module.exports = { writeSVG };
