///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function calculadora(numero1, numero2, operador){

let resultados
let num1 = parseInt(numero1)
let num2 = parseInt(numero2)

  switch (operador){
    case '+':
      resultados =  num1 + num2
      break;
    case '-':
      resultados = num1 - num2
      break;
    case '*':
      resultados = num1 * num2
      break;
    case '/':
      resultados = num1 / num2
      break;
    case 'e':
      resultados = num1**num2
      break;

  
  }
if(resultados == undefined || resultados >= 1000000  )
  resultados = 'ERRO'

  return resultados


}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = calculadora(numeros[0], numeros[1], operador)
}