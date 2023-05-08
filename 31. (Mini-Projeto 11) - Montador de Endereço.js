const endereco = {
    rua: 'Luiz eduardo',
    cidade: 'Rolandia',
    cep: '44985-000',
    exibirEndereco() {
        console.log(this.rua, this.cidade, this.cep);
    }
}
console.log(endereco.exibirEndereco())

function exibirEndereco(localization) {
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

console.log(exibirEndereco(endereco))