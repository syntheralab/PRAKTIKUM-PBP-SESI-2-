const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Data Mahasiswa
rl.question("Masukkan Nama Mahasiswa : ", function(nama) {
    // Input 2: Nilai Tugas
    rl.question("Masukkan Nilai Tugas    : ", function(inputTugas) {
        // Input 3: Nilai UTS
        rl.question("Masukkan Nilai UTS      : ", function(inputUTS) {
            // Input 4: Nilai UAS
            rl.question("Masukkan Nilai UAS      : ", function(inputUAS) {
                
                // Konversi input ke angka (float untuk mengantisipasi angka desimal)
                let tugas = parseFloat(inputTugas);
                let uts = parseFloat(inputUTS);
                let uas = parseFloat(inputUAS);

                // Rumus Nilai Akhir dengan Bobot (Tugas 30%, UTS 30%, UAS 40%)
                let nilaiAkhir = (tugas * 0.3) + (uts * 0.3) + (uas * 0.4);

                // Konversi Nilai Akhir ke Grade (A, B, C, D, E)
                let grade = "";
                if (nilaiAkhir >= 85) {
                    grade = "A";
                } else if (nilaiAkhir >= 70) {
                    grade = "B";
                } else if (nilaiAkhir >= 55) {
                    grade = "C";
                } else if (nilaiAkhir >= 40) {
                    grade = "D";
                } else {
                    grade = "E";
                }

                // Menampilkan Hasil
                console.log("\n=== HASIL PENILAIAN MAHASISWA ===");
                console.log("Nama Mahasiswa :", nama);
                console.log("Nilai Tugas    :", tugas);
                console.log("Nilai UTS      :", uts);
                console.log("Nilai UAS      :", uas);
                console.log("Nilai Akhir    :", nilaiAkhir.toFixed(2));
                console.log("Grade Nilai    :", grade);

                rl.close();
            });
        });
    });
});
