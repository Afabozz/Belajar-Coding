// var s = '';
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     s += '*';
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (i = 5; i > 0; i--) {
//   for (j = 0; j <= 5; j++) {
//     if (j >= i) {
//       s += '*';
//     } else {
//       s += ' ';
//     }
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 5; i > 0; i--) {
//   for (var j = 5; j > 0; j--) {
//     if (j <= i) {
//       s += '*';
//     } else {
//       s += ' ';
//     }
//   }
//   s += '\n';
// }
// console.log(s);

// var s = '';
// for (var i = 0; i < 6; i++) {
//   if (i % 2 == 0) {
//     for (var j = 0; j < 6; j++) {
//       if (j % 2 == 0) {
//         s += '#';
//       } else {
//         s += ' ';
//       }
//     }
//     s += '\n';
//   } else {
//     for (var j = 0; j < 6; j++) {
//       if (j % 2 == 0) {
//         s += ' ';
//       } else {
//         s += '#';
//       }
//     }
//     s += '\n';
//   }
// }
// console.log(s);

var s = '';
var pola = 5;
function faktorial(n) {
  var a = 1;
  var i = 1;
  while (i <= n) {
    a *= i;
    i++;
  }
  return a;
}
for (var i = 0; i < pola; i++) {
  for (var j = pola; j >= i; j--) {
    s += ' ';
  }
  for (var j = 0; j <= i; j++) {
    s += faktorial(i) / (faktorial(j) * faktorial(i - j)) + ' ';
  }
  s += '\n';
}
console.log(s);

// let jumlahBaris = 5;
// let segitigaPascal = new Array(jumlahBaris);
// for (let i = 0; i < jumlahBaris; i++) {
//     segitigaPascal[i] = new Array(i+1);
// }
// for (let i = 0; i < jumlahBaris; i++) {
//     segitigaPascal[i][0] = 1;
//     segitigaPascal[i][i] = 1;
// }
// for (let i = 2; i < jumlahBaris; i++) {
//     for (let j = 1; j < i; j++) {
//         segitigaPascal[i][j] = segitigaPascal[i-1][j-1] + segitigaPascal[i-1][j];
//     }
// }
// for (let i = 0; i < jumlahBaris; i++) {
//     console.log(segitigaPascal[i].join(" "));
// }
