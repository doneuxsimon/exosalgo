const readlineSync = require('readline-sync');

let number;

function rightNumber(number) {
    number = readlineSync.question("Choose a number between 1 and 7 : ");
    if (number == 1) {
        console.log("U choosed monday");
    } else if (number == 2) {
        console.log("U choosed tuesday");
    } else if (number == 3) {
        console.log("U choosed wednesday");
    } else if (number == 4) {
        console.log("U choosed thursday");
    } else if (number == 5) {
        console.log("U choosed friday");
    } else if (number == 6) {
        console.log("U choosed saturday");
    } else if (number == 7) {
        console.log("U choosed sunday");
    } else {
        console.log("Wrong number");
        rightNumber(number);
    }
}

rightNumber(number);