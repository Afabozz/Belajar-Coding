// Manipulasi array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Kafa";
// arr[1] = "Fafa";
// arr[2] = "Nofa";
// arr[6] = "Sofa";
// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Kafa", "Fafa", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array
// var arr = ["Kafa", "Fafa", "Nofa", "Sofa"];

// for( var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array

// var arr = ['Kafa', 'Fafa', 'Nofa'];

// 1. join
// console.log(arr.join(' - '));

// 2. push & pop 
// arr.push('Sofa', 'Safa');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('Sofa');
// arr.shift();
// console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBari1, elemenBaru2, ...)
// arr.splice(2, 0, 'Sofa', 'Safa');
// arr.splice(1, 2, 'Sofa', 'Safa');
// console.log(arr.join(' - '));

// 5. slice
// var arr = ['Kafa', 'Fafa', 'Nofa', 'Sofa', 'Safa'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Kafa', 'Fafa', 'Nofa', 'Sofa', 'Safa'];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// bisa disederhanakan seperti ini
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(function(e) {
//     console.log(e);
// }); 

// atau 
// var cetak = function(e) {
//     console.log(e);
// }
// angka.forEach(cetak);

// atau 
// angka.forEach(function(e) {
//     console.log(e);
// });
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' : ' + e);
// });


// 7. map
// var angka = [1,3,5,7,2,4,6];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort 
// var angka = [1,3,5,7,9,20,2,4,6,8,10];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & find
var angka = [1,3,20,5,9,2,4,6,8,10];
var angka2 = angka.find(function(x) {
    // return x == 7;
    return x > 5;
});
console.log(angka2);