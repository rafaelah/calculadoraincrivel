# calculadoraincrivel
Construção de uma calculadora capaz de executar funções de soma, subtração, multiplicação e divisão.
<!DOCTYPE html>
<html>
<head class="text-center">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Calculadora incrível</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link rel="stylesheet" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
</head>
<body>
	<div class="container-calculator">
		<div class="row text-center justify-content-center">
			<div class="col-12">
				<input type="number" id="elem-1">
			</div>
			<div class="col-12">
				<div class="container operations">
					<div class="row text-center align-items-center">
						<div class="col operation">
							<input type="radio" id="operation1" value="+" name=operation checked>
							<label for="operation1">+</label>
						</div>
						<div class="col operation">
							<input type="radio" id="operation2" value="-" name="operation">
							<label for="operation2">-</label>
						</div>
						<div class="col operation">
							<input type="radio" id="operation3" value="*" name="operation">
							<label for="operation3">&times;</label>
						</div>
						<div class="col operation">
							<input type="radio" id="operation4" value="/" name="operation">
							<label for="operation4">&divide;</label>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12">
				<input type="number" id="elem-2">
			</div>
			<div class="col-12">
				<button id="calculated-button">=</button>
			</div>
			<div class="col-12">
				<h2 id="result"></h2>
			</div>
		</div>
	</div>
	<script src="js/script.js"></script>
</body>
</html>
