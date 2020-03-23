function hitung(duit, harga) {
    let banyakMie = duit / harga;
    let promo = banyakMie / 4;
    let total = banyakMie + promo;
    return total;
}
console.log(hitung(50000, 2500))