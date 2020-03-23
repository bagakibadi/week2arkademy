
let perintah = [true, true, false, true];
let hurufPrint = ['a', 'b', 'c', 'd'];
function test(perintah, hurufPrint) {
    let penampung = '';
    for(i = 0; i < hurufPrint.length; i++) {
        if(perintah[i] === true) {
            penampung += hurufPrint[i]+ ' ';
        }
    }
console.log(penampung)
}
test(perintah, hurufPrint)