function pohon(tinggi, tahun) {
  if(tinggi == 0 || tahun == 0) {
    console.log('Tinggi dan Tahun harus lebih dari 0');
  }else {
    for(i = 0; i < tahun; i++){
        console.log(tinggi = tinggi * 2 + 1);
    }
  }
}
pohon(3,2)
