 var nama ='Johnny';
 var peran = 'Penari';

if(nama == '', peran == '') { 
    console.log(`Nama dan peran harus diisi!`);

} else if(nama == 'Mikael', peran == '') { 
    console.log(`Halo ${nama}, pilih peranmu untuk memulai game!`);

} else if (peran == 'Ksatria') {
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);

} else if(peran == 'Tabib') { 
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);

} else if(peran == 'Penyihir') { 
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);

} else if(peran == 'Petarung') { 
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, lawan musuh dengan kekuatan fisikmu yang menakjubkan!`);

} else if(peran == 'Penari') { 
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    console.log(`Halo ${peran} ${nama}, kalahkan musuh dengan keindahan gerakanmu!`);

} else {
    console.log('Nama atau Peran tidak terdaftar.');
}