//Divisível por 3 -> Fizz
//Divisível por 5 -> Buzz
//Divisível por 3 e 5 -> FizzBuzz
//Não é divisível por 3 ou 5 -> entrada
//Não é um número -> 'Não é um número'
const resultado = fizzBuzz(6)
console.log(resultado)

function fizzBuzz(entrada) {
    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return console.log('FizzBuzz')
    } else if (entrada % 3 === 0) {
        return console.log('Fizz')
    } else if (entrada % 5 === 0) {
        return console.log('Buzz')
    } else if (isNaN(entrada)) {
        return console.log('Não é um número')
    } else {
        return console.log(entrada)
    }
}