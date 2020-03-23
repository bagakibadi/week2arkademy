function transpose(data) {
    let penampung = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (penampung[j] === undefined){ 
              penampung[j] = [];
            };
          penampung[i][j] = data[j][i];
        }
    }
    return penampung.join('\n');
}

console.log(transpose([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]));
