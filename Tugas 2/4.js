let database = [
    {
        keyTitle : 'Dilan',
        author : 'Pidi Baiq',
        status : 'Tersedia'
    },
    {
        keyTitle : 'Lembur',
        author : 'Denny',
        status : 'Tersedia'
    },
    {
        keyTitle : 'Zombie',
        author : 'Ryan',
        status : 'Tidak Tersedia'
    }
]

function check (judul, status){
    console.log('Menampilkan Buku Yang : '+ status)
    for(i = 0; i < database.length; i++) {
        if(database[i].status == status) {
            console.log(database[i]);
        }
    }
    console.log(`Menampilkan Buku : ` + judul);
    for(j = 0; j < database.length; j++) {
        if(database[j].keyTitle == judul) {
            console.log(database[j]);
        }
    }
}
check( 'Dilan','Tersedia');
