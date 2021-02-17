let p = []

function primes(num){
	let t = false
	for(let acc = 1; acc < num; acc++){
		if(num % acc == 0 && acc !== 1){
			t = true
			p.push(acc)
			primes((num/acc))
			break;
		}
	}
	if(!t){
		p.push(num)
	}
	return p
}
primes(600851475143)

console.log(p)