const readlineSync = require('readline-sync');

let number = readlineSync.question("what is your favorite number?");

while (number != 42) {
    console.log("Are you sure?");
    number = readlineSync.question("Try again : ");
}
console.log("Your favorite number is " + number + " !");