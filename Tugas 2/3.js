var array = [9, 8, 9, 3, 2, 6, 4, 5];

function mean (data) {
	let total = 0;
	for (i = 0; i < data.length; i++) {
    	total += data[i];
	}
	console.log("Mean Asli : " +(total / data.length));
  	console.log("Mean Bulat : " + Math.round(total / data.length));
}
mean(array);

function median (array) {
	let sort = array.sort((a,b) => a-b);
  	let tengahBawah = Math.floor((array.length - 1) / 2);
  	let tengahAtas = Math.ceil((array.length -1) / 2);
  	let median = (array[tengahBawah] + array[tengahAtas]) / 2;
    return "Median : " + median;
}
console.log(median(array));
