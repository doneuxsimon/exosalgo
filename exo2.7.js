const readlineSync = require('readline-sync');

let addition = 0;

let n = readlineSync.question("Enter a number : ");

while (n-- != 0) {
    addition = addition + Number.parseInt(readlineSync.question("Enter a new number : "));
}


console.log(addition); 