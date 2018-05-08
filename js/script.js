document.getElementById("calculated-button").onclick = function() {
	//coletar números dentro das caixas de input
	let elem1 = document.getElementById('elem-1');
	let elem2 = document.getElementById('elem-2');

	let val1 = parseInt(elem1.value);
	let val2 = parseInt(elem2.value);
	let sum	= val1 + val2;
	let choice = document.querySelector('input[name="operation"]:checked');
	let operation = choice.value;
	let operationResult = getResult (val1,val2,operation);
	
	/**
	*Validating fields
	*/
	if (isNaN(val1)) {
			alert ('Insira um número.');
		}
	else if (isNaN(val2)) {
			alert ('Insira um número.')
		}
	else {
	//Show results from element with id 'result'
		let resultElement = document.getElementById('result');
		resultElement.innerHTML = operationResult;
	}


	/**
	*Returns the result of an operation over two numbers.
	*Arguments: two valid numbers and one operation symbol.
	*Support sum, substration, multiplication and division.
	*/

	function getResult (val1, val2, operation) {
		if (operation === '+') {
			return val1+val2;
		} else if (operation === '-') {
			return val1-val2;
		} else if (operation === '*') {
			return val1*val2;
		} else {
			return val1/val2;
		}
	}
}