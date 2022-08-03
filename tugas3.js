let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    result = dataArray.filter((elemen) => elemen >= nilaiAwal && elemen <= nilaiAkhir);
    sortResult = result.sort((a, b) => a - b);
    try {
        if (isNaN(nilaiAwal) || isNaN(nilaiAkhir)) throw `Data bukan angka`
        if (nilaiAwal > nilaiAkhir) throw (`Nilai akhir harus lebih besar dari nilai awal`);
        if (dataArray == 0 || nilaiAwal == 0 || nilaiAkhir == 0) throw (`Tolong masukkan data`);
        if (dataArray.length < 5) throw (`Jumlah angka dalam dataArray harus lebih dari 5`);
        if (result.length == 0) throw (`Nilai tidak ditemukan`);
        if (nilaiAwal < nilaiAkhir) throw (sortResult);
    } catch (err) {
        console.log(err);
    }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17, [2, 25, 4])
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])
seleksiNilai(5, "asdasd", [2, 25, 4, 1, 30, 18])