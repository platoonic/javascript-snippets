/*
	
	Currying in Javascript

*/

/* Basic Example */
function add(a){
	sum = a;
	return function(b){
		sum += b;
		return function(c){
			sum += c;
			return sum;
		}
	}
}

/* Usage */
//console.log(add(1)(2)(3));

/* Meaningful Example */
function add(a, b){
	return a + b;
}

function substract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function operation(f){
	return function(a){
		return function(b){
			return f(a, b);
		}
	}
}

/* Usage */
//console.log(operation(add)(3)(5));
//console.log(operation(multiply)(2)(5));

//const adder = operation(add);
//console.log(adder(10)(10));

//const multiplier = operation(multiply);
//console.log(multiplier(20)(5));









