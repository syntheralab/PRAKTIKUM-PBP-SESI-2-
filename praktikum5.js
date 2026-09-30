const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", function(inputAngka) {
    let angka = parseInt(inputAngka);

    if (angka % 2 === 0) {
        console.log(angka + " adalah angka GENAP");
    } else {
        console.log(angka + " adalah angka GANJIL");
    }

    rl.close();
});