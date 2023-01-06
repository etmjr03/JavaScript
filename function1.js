//função anonima ou function expression, espressão
let total = 0;
// number1 e number2 são parâmetros
const sum = function(number1, number2) {
/* é indicado utilizar sempre palavra chave ao declarar uma variável dentro da função,
para não correr o risco do valor dela ser global.
*/
    total = number1 + number2;
    return total;
}

//sum(2, 3) // argumentos

let number1 = 10;
let number2 = 20;

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a some do número 1 e 2 é ${sum(number1, number2)}`)