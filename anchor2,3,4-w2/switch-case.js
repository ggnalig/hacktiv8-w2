var tanggal = 32;
var bulan   = 12;
var tahun   = 2200;

switch (true) {
    case (tahun > 2200):
    case (tahun < 1900):
    console.log(`tanggal yang bisa di input mulai dari 1 januari 1900 - 31 Desember 2200.`);   
    break;
    default:
    switch (true) {
        case (tanggal <= 0):
        case (tanggal > 31):
        console.log(`tanggal yang bisa di input mulai dari 1 - 31.`);
        break;
        default:
        switch (bulan) {
            case 1:
            console.log(`${tanggal} Januari ${tahun}`);
            break;
            case 2:
            console.log(`${tanggal} Februari ${tahun}`);
            break;
            case 3:
            console.log(`${tanggal} Maret ${tahun}`);
            break;
            case 4:
            console.log(`${tanggal} April ${tahun}`);
            break;
            case 5:
            console.log(`${tanggal} Mei ${tahun}`);
            break;
            case 6:
            console.log(`${tanggal} Juni ${tahun}`);
            break;
            case 7:
            console.log(`${tanggal} Juli ${tahun}`);
            break;
            case 8:
            console.log(`${tanggal} Agustus ${tahun}`);
            break;
            case 9:
            console.log(`${tanggal} September ${tahun}`);
            break;
            case 10:
            console.log(`${tanggal} Oktober ${tahun}`);
            break;
            case 11:
            console.log(`${tanggal} November ${tahun}`);
            break;
            case 12:
            console.log(`${tanggal} Desember ${tahun}`);
            break;
            default:
            console.log(`bulan yang bisa di input 1 - 12`)
            break;
        }
        break;
    }
    break;
}





