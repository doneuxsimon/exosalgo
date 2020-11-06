const readlineSync = require('readline-sync');




function askTvSerie(){
    let tvSerie = {
        name: readlineSync.question("nom de ta serie pref : "),
        "production year": readlineSync.question("anne de production de ta serie pref : "),
        "cast name": []
    };
    let userNumber = Number.parseInt(readlineSync.question("nombre d'acteurs de la serie : "));
    for (let n = 0; n < userNumber; n++) {
        tvSerie["cast name"].push(readlineSync.question("Nom d'un acteur : "))
    }
    console.log(tvSerie.name);
    console.log(tvSerie["production year"]);
    console.log(tvSerie["cast name"]);
}


askTvSerie();