const promptUser = require('./lib/userInput');
const generateSVG = require('./lib/svgGenerator');
const fs = require('fs');

async function run() {
  try {
    const { text, textColor, shape, shapeColor } = await promptUser();
    const svg = generateSVG(text, textColor, shape, shapeColor);

    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
  } catch (err) {
    console.error('Error:', err);
  }
}

run();
