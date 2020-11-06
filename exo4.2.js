    let myarray = [];

    function getRandomInt() {
        return Math.floor(Math.random() * 10);
    }

    function multiRand(n) {
        let number
        while (n-- != 0) {
            number = myarray.push(getRandomInt());
        }
        return number;
    }

    let n = 15;
    myarray.push(multiRand(n));

    console.log(myarray);