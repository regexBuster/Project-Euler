//sums and returns even fibbanaci numbers up to a max
function fibb(max){
	let sum = 0
	let args = [0,1]

	for(;args[1] < max;){
		if(args[1] % 2 == 0){
			sum += args[1]
			console.log(args[1])
		}
		args.push(args[0] + args[1])
		args.shift()
	}
	return sum
}

console.log(fibb(4000000))