function aloMundo(){
	alert("Alô Mundo!");
}

function informar() {
 let numero = document.getElementById("numero").value;
  let informacao = document.getElementById("informacao");
  
  if (numero === "") {
    informacao.innerHTML = "Por favor, digite um número";
  } else {
    informacao.innerHTML = "O número informado foi " + numero;
  }
}

function Soma() {
	let numero1 = parseInt(document.getElementById("numero1").value);
	let numero2 = parseInt(document.getElementById("numero2").value);
	
	let resultado = document.getElementById("resultado");
	
	let soma = numero1 + numero2;
	resultado.innerHTML = "A soma é: "+ soma;
}

function Media() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let num3 = parseInt(document.getElementById("num3").value);
	let num4 = parseInt(document.getElementById("num4").value);
	
	let resultado = document.getElementById("resultado");
	let soma = num1 + num2 + num3 + num4;
	let media = soma / 4;
	resultado.innerHTML = "A media é: "+ media;
}

function conversor() {
	let valor = parseFloat(document.getElementById("valor").value);
	
	let resultado = document.getElementById("resultado");
	
	let conversao = valor * 100;
	resultado.innerHTML = "o valor em centímetros é " +conversao;
}

function Area() {
	let raio = parseFloat(document.getElementById("raio").value);
	
	let resultado = document.getElementById("resultado");
	
	let Area = Math.PI * raio ** 2;
	resultado.innerHTML = "A área é "+Area;
}

function AreaDobro() {
	let valorlateral = parseFloat(document.getElementById("valorlateral").value);
	
	let resultado = document.getElementById("resultado");
	
	let area = valorlateral ** 2;
	let dobro = area * 2;
	resultado.innerHTML = "O valor da Area é " + area + " e o seu dobro é " + dobro;
}

function Salarial() {
	let ganhoHora = parseFloat(document.getElementById("ganhoHora").value);
	let horastrabalhada = parseFloat(document.getElementById("horastrabalhada").value);
	
	let resultado = document.getElementById("resultado");
	
	let soma = ganhoHora * horastrabalhada;
	resultado.innerHTML = "O salário mensal será de " + soma;
}

function FahrenheitparaCelsius() {
	let Fahrenheit = parseFloat(document.getElementById("Fahrenheit").value);
	
	let resultado = document.getElementById("resultado");
	
	let Celsius = 5 * ((Fahrenheit - 32) / 9);
	resultado.innerHTML = "A temperatura em Celsius " + Math.round(Celsius) + "°C";
}

function CelsiusparaFahrenheit() {
	let Celsius = parseFloat(document.getElementById("Celsius").value);
	
	let resultado = document.getElementById("resultado");
	
	let Fahrenheit = (Celsius * 9/5) + 32;
	resultado.innerHTML = "A temperatura em Celsius " + Math.round(Fahrenheit) + "°F";
}