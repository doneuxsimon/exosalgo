const readlineSync = require('readline-sync')
let age = readlineSync.question('What is your age ?');
if (age >= 18) {
    console.log("Vous etes un adulte");
}