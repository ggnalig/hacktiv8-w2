function xo(str) {
    var charX = '';
    var charO = '';
    var char = str;
    for (let i = char.length; i >= 0; i--){
        switch (true) {
            case (char[i] == 'x'):
            charX = charX + 'x';
            break;
            case (char[i] == 'o'):
            charO = charO + 'o';
            break;
            default:
            break;
        }
    }
    var jumlahX = charX.length;
    var jumlahO = charO.length;
    
    if (jumlahX == 0 && jumlahO == 0) {
        return `kata '${char}' tidak mengandung x dan o`
    } else {
        return jumlahX == jumlahO;
    } 
}

// TEST CASES
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
console.log(xo('abcas'));