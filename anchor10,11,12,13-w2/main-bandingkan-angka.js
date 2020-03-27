function bandingkanAngka(angka1, angka2) {
    var angkaa = angka1;
    var angkab = angka2;

    if (angkaa < angkab) {
        return true;
    } else if (angkaa > angkab) {
        return false;
    } else {
        return -1;
    } 
}

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false