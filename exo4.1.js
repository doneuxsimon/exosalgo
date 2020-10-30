const readlineSync = require('readline-sync');

let length, width, surfaceRectangle;

function calcSurface(length, width) {
    surfaceRectangle = length * width;
    console.log(surfaceRectangle);
}

length = Number.parseInt(readlineSync.question("Put the rectangle length :"));
width = Number.parseInt(readlineSync.question("Put the rectangle width :"));

calcSurface(length, width);