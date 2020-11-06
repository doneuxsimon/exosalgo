const readlineSync = require('readline-sync');


function getRandomInt() {
        return Math.floor(Math.random() * 100);
}
    
function multiRand (n) {
    for (let i = 0; i < n; i++) {
        arr.push(getRandomInt());
    }
    return arr;
}

function minimum() {
    console.log(Math.min.apply(Math, arr));
}
    
function maximum() {
    console.log(Math.max.apply(Math, arr)); 
}
    
function average() {
    let moyenne = 0;
    let i = 0;

while (i <= arr.length-1) {
    moyenne = moyenne + arr[i];
    i++;
}
console.log(moyenne / i);
}
let userNumber = readlineSync.question("How many numbers u want? ");
let arr = [];



multiRand(userNumber);   
minimum();
maximum();
average();