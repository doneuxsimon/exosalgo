let min = 0;
let max = 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function multiRand(n) {
    while (n-- != 0) {
        console.log(getRandomInt(min,max));
    }
}

let n = 5;
multiRand(n);