//Criar uma função que exibe a quantidade de *
//Que aquela linha possui
console.log(exibirAsterisco(10))

function exibirAsterisco(limite) {
    let asterisco = '*'
    let asteriscoQuantidade = 1
    for (let i = 0; i < limite; i++) {
        console.log(asterisco + ' com ' + asteriscoQuantidade + ' asterisco(s)')
        asteriscoQuantidade += 1
        asterisco += '*'
    }
}