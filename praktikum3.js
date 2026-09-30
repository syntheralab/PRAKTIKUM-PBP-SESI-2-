let a = 20;
let b = 6;
console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", a / b);
console.log("Modulus:", a % b);

// 1. Luas Persegi (sisi x sisi)
let sisi = 5;
let luasPersegi = sisi * sisi;

// 2. Luas Segitiga (1/2 x alas x tinggi)
let alas = 8;
let tinggiSegitiga = 10;
let luasSegitiga = 0.5 * alas * tinggiSegitiga;

// 3. Luas Lingkaran (pi x r x r)
let r = 7;
let luasLingkaran = Math.PI * r * r;

console.log("\n=== HASIL PERHITUNGAN LUAS ===");
console.log("Luas Persegi (sisi =", sisi, ")           :", luasPersegi);
console.log("Luas Segitiga (alas =", alas, ", tinggi =", tinggiSegitiga, ") :", luasSegitiga);
console.log("Luas Lingkaran (r =", r, ")           :", luasLingkaran.toFixed(2));


