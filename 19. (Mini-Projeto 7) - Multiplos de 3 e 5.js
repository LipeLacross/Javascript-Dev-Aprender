// Criar função somar que retorna a
// Soma de todos os múltiplos de 3 e 5
console.log(somar(6));

function somar(limite) {
    let soma = 0;
    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0){
            soma += i
        }
        if (i % 5 === 0){
            soma += i
        }
    }
    return soma
}