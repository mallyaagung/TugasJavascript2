//1. indexOf() mengetahui index elemen suatu array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// console.log(index)

//2. sort() adalah fungsi yang digunakan untuk mengurutkan elemen dalam array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const number = [5, 4, 3, 2, 1]
// console.log(fruits.sort());
// console.log(number.sort());

//3. slice() adalah method yang mengembalikan nilai dengan batas tertentu menjadi array baru
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// const myBest = fruits.slice(-3, -1);
// console.log(citrus)
// console.log(myBest)

//reduce() => method yang digunakan untuk mengembalikan nilai total semua elemen dalam sebuah array
// const number = [100, 20, 10, 20];
// const total = number.reduce(jumlah);
// function jumlah(sum, angka) {
//     return sum - angka;
// }
// console.log(total)

//5. find() adalah fungsi yang digunakan untuk menemukan nilai tertentu dalam sebuah array.
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);

//6. pop() adalah fungsi yang digunakan untuk menghapus elemen terakhir dari sebuah array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits)

//7. filter() adalah fungsi yang digunakan untuk menyaring nilai dalam array berdasarkan kondisi tertentu.
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result)

//8. push() adalah fungsi yang digunakan untuk menambahkan nilai kedalam array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits)

//9. .length adalah fungsi yang digunakan untuk mengetahui banyaknya elemen array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length)

//10. fill() adalah fungsi yang mengganti nilai elemen dalam array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// fruits.fill("Kiwi", 2, 4);
// console.log(fruits)