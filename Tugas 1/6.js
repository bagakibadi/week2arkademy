function binary(number) {
    let penampung = '';
    for (;number > 0;){
        if(number % 2 === 0) {
            penampung = 0 + penampung;
        } else {
            penampung = 1 + penampung;
        }
        number = Math.floor(number/2);
    }
    return '$ Angka Biner = '+penampung;
}
console.log(binary(12));
console.log(binary(100));
console.log(binary(30));
console.log(binary(53));