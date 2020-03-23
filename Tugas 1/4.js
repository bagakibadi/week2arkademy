
function sorting(dataArray) {
    let min = Math.min(...dataArray);
    let max = Math.max(...dataArray);
    let spread1 = [...dataArray];
    let spread2 = [...dataArray];
    let ascending = spread1.sort(function(a,b){
        return a-b;
    });
    let descending = spread2.sort(function(a,b){
        return b-a;
    });
    console.log('Data Terkecil : ' + min);
    console.log('Data Terbesar : ' + max);
    console.log('Ascending Sort : ' + ascending);
    console.log('Descending Sort : ' + descending);
}
sorting([6,22,34,15,2,13,26,57,42,32]);