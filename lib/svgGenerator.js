function generateSVG(text, textColor, shape, shapeColor) {
  const ShapeClass = require(`./shapes`).Shape;
  const shapeInstance = new ShapeClass();

  shapeInstance.setColor(shapeColor);

  const shapeSVG = shapeInstance.render();
  const textSVG = `<text x="50%" y="50%" fill="${textColor}" text-anchor="middle">${text}</text>`;

  const svg = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      ${textSVG}
    </svg>
  `;

  return svg;
}

module.exports = generateSVG;
