//1.Melakukan Looping Menggunakan While
console.log('1.Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA');
var x = 2;
while(x <= 20) { 
    console.log(`${x} - I love coding`);
    x = x + 2; 
}
console.log('LOOPING KEDUA');
var x = 20;
while(x >= 2) { 
    console.log(`${x} - I will become fullstack developer`);
    x = x - 2; 
}
//2.Melakukan Looping Menggunakan For
console.log('2.Melakukan Looping Menggunakan For');
console.log('LOOPING PERTAMA');
for(var angka = 1; angka <= 20; angka++) {
    console.log(`${angka} - I love coding`);
}
console.log('LOOPING KEDUA');
for(var angka = 20; angka >= 1; angka--) {
    console.log(`${angka} - I will become fullstack developer`);
}
//3.Angka Ganjil dan Genap
console.log('3.Angka Ganjil dan Genap');
for(var angka = 1; angka <= 100; angka++){
    if((angka%2)==1){
      console.log('GANJIL');
    }
    else if ((angka%2)===0) {
      console.log('GENAP');
    }
  }
  
  
  for(var tambah2 = 1; tambah2 <= 100; tambah2+=2){
    if((tambah2%3)===0){
      console.log(tambah2 + ' KELIPATAN 3');
    }
    else {
      console.log(' ');
    }
  }
  
  
  for(var tambah5 = 1; tambah5 <= 100; tambah5+=5){
    if((tambah5%6)===0){
      console.log(tambah5 + ' KELIPATAN 6');
    }
    else {
      console.log(' ');
    }
  }
  
  
  for(var tambah9 = 1; tambah9 <= 100; tambah9+=9){
    if((tambah9%10)===0){
      console.log(tambah9 + ' KELIPATAN 10');
    }
    else {
      console.log('');
    }
  }