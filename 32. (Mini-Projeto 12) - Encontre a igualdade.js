function Endereco(rua, cidade, cep) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
}

const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('b', 'b', 'c')

function comparar(endereco1, endereco2) {
    let comparacao = true;
    for (let i in endereco1) {
        if (endereco1[i] != endereco2[i]) {
            comparacao = false;
            break;
        }
    }
    return comparacao
}
console.log(comparar(endereco1, endereco2))

function compararMemoria(endereco1, endereco2) {
    return endereco1 === endereco2 //false pq eles apontam para lugares diferentes na memória
}
