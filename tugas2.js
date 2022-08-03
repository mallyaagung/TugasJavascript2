const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

let searchName = (str, limit) => {
    dataBaru = [];
    name.map(elemen => {
        data = elemen.toLowerCase();
        if (data.indexOf(str) != -1) {
            dataBaru.push(elemen);
        }
    })
    let cari = dataBaru.slice(0, limit);
    return cari;
}

let noData = (array) => {
    if (array == undefined || array.length == 0) {
        console.log(`Maaf data yang anda cari tidak ditemukan`)
    } else {
        console.log(array)
    }
}

let doSearch = (str, limit, cariNama, callback) => {
    var res = cariNama(str, limit);
    let re = /^[A-Za-z]+$/;
    if (str == "") {
        console.log(`Tolong masukkan data yang ingin dicari`)
    } else if (re.test(str)) {
        return callback(res);
    } else {
        console.log(`Data yang dimasukkan bukan string`)
    }
}

doSearch("an", 3, searchName, noData)
doSearch("rol", 4, searchName, noData)
doSearch("yatno", 3, searchName, noData)
doSearch("", 3, searchName, noData)
doSearch(3, 3, searchName, noData)




