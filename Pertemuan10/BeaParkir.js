// Menghitung
function hitungbiayaparkir() {
    let jamMasuk = document.getElementById("jam_masuk").value;
    let jamKeluar = document.getElementById("jam_keluar").value;
    
    // Parse input times
    let jamMasuk = new Date(`1970-01-01T${jamMasukInput}:00`);
    let jamKeluar = new Date(`1970-01-01T${jamKeluarInput}:00`);

    if (jamKeluar <= jamMasuk) {
        alert("Exit time must be after entry time.");
        return;
    }
    let lamaParkir = (jamKeluar - jamMasuk) / (1000 * 60 * 60); // Convert milliseconds to hours
    //let lamaParkir = jamKeluar - jamMasuk;
    console.log(lamaParkir);
  
    //Biaya 2 jam pertama
    let biayaParkir = 3000
    lamaParkir -= 2
  

    // Lama Parkir
    if (lamaParkir > 0) {
      biayaParkir = biayaParkir + (lamaParkir * 1000)
    }
    console.log(biayaParkir)
    document.getElementById('biaya').innerText = biayaParkir;
  }
  