let array = [2,3,5,7,11];

function pyramid (bebas) {
    let penampung = '';
    for(i = 0; i < bebas.length ; i++) {
        penampung += bebas[i] + ' ';
        console.log(penampung);
    }
}
pyramid(array)