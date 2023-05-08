//criar um array de objetos de preço para que ela possa ser usados em um site igual o mercado livre

//Primeiro método
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'até R$700', minimo: 700, maximo: 1000},
    {tooltip: 'até R$700', minimo: 1000, maximo: 99999}
];

//Segundo método (Factory Function)
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaPreco('a', 0, 700),
    criarFaixaPreco('b', 700, 1000),
    criarFaixaPreco('c', 1000, 99999)
]

//Terceiro método (Constructor Function)
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let faixas3 = [
    faixa1 = new FaixaPreco('a', 0, 700),
    faixa2 = new FaixaPreco('b', 700, 1000),
    faixa3 = new FaixaPreco('c', 1000, 99999)
    /*Outra forma
    new FaixaPreco('a', 0, 700),
    new FaixaPreco('b', 700, 1000),
    new FaixaPreco('c', 1000, 99999)
     */
]
console.log(faixas)
console.log(faixas2)
console.log(faixas3)