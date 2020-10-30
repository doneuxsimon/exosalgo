/*const readlineSync = require('readline-sync');

let min, max, current;
min = readlineSync.question("Indicate your minimum number :");
max = readlineSync.question("Indicate your maximum number :");
current = readlineSync.question("Indicate your current number :");

if (min > max) {
    console.log("Tu n'as malheureusement pas compris l'énoncé de l'exercice!");
    setInterval((function() {  
    return;
    }), 5000);
}

else if ((max > current) && (current > min)) {
    console.log(current);
}*/


const readlineSync = require('readline-sync')

let current = readlineSync.question("Entrez un chiffre: ")
let min = readlineSync.question("Entrez un chiffre plus petit: ")
let max = readlineSync.question("Entrez un chiffre plus grand: ")

if (min > max){
    console.log("T'es con ou quoi ?! " + max + " est plus petit que " + min)
}

else if (min < current< max){
    console.log("Bravo ! " + current + " est bien entre " + min + " et " + max)
}