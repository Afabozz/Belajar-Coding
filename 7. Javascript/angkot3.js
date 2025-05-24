var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if(noAngkot <= 6 ) {
    console.log('Angkot No. ' + noAngkot + ' sedang beroperasi.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
  }
}