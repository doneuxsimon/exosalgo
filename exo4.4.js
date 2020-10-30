const readlineSync = require('readline-sync');

let min = 0;
let max = 1000;
let arr = [];
let moyenne = 0;
let i = 0;
let n = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

.forEach(function multiRand(n) {
    while (n-- != 0) {
        arr.push(getRandomInt(min, max));
    }
})

function average(arr) {
    while (i < arr.push()) {
        moyenne = moyenne + arr[i];
        i++;
    }
    console.log(moyenne / i);
}

function minimum(arr) {
    console.log(Math.min.apply(Math, arr));
}

function maximum(arr) {
    console.log(Math.max.apply(Math, arr));
}


n = readlineSync.question("put how many numbers do you want :")

average(arr);
minimum(arr);
maximum(arr);

multiRand(n);