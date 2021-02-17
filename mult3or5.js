//sums and returns multiples of 3 or 5 up to a max value
function sum35 (max){
	let sum = 0
	for(let acc = 1; acc < max; acc++){
		if(acc % 3 == 0 || acc % 5 == 0)
			sum += acc
	}
	return sum
}

//sums and prints the multiples of 3 or 5 below 1000
console.log(sum35(1000))