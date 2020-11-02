const readlineSync = require('readline-sync');

let userNumber = 0;
let averageNumber = 0;
let minimumNumber = 0;
let maximumNumber = 0;
let array = [];
let position = 0;


function askNumber(userNumber) {
    userNumber = readlineSync.question("Put your number : ");
    multiRand(userNumber);
    minimum(minimumNumber);
    maximum(maximumNumber);
    average(averageNumber);
}

let min = 0;
let max = 100;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function multiRand(userNumber) {
    while (userNumber-- != 0) {
        array[position] == getRandomInt(min, max);
        position++;
    }
}

function minimum(minimumNumber) {
    minimumNumber = Math.min.apply(null, array);
    console.log(minimumNumber);
}

function maximum(maximumNumber) {
    maximumNumber = Math.max.apply(null, array);
    console.log(maximumNumber);
}

let moyenne = 0;
let i = 1;

function average(averageNumber) {
    while (i <= userNumber) {
        moyenne = moyenne + array[i];
        i++;
    }
    averageNumber = moyenne / i;
    console.log(averageNumber);
    }

askNumber(userNumber);