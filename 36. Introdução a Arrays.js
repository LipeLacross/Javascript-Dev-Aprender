//Adicionando elementos
const numeros = [1, 2, 3, 1, 4];

//Inserir no início
numeros.unshift(0);
console.log(numeros)
//Inserir no meio
numeros.splice(1, 0, 'a')
console.log(numeros)
//Inserir no meio
numeros.push(5);
console.log(numeros)

//Encontrando elementos(Primitivo)
console.log(numeros.indexOf(2));//retorna o índice do elemento, caso não achar, aparece -1
console.log(numeros.lastIndexOf(1));//vai ver o índice da última ocorrência do valor, começando pela esquerda
console.log(numeros.indexOf(2) !== -1)//true, se existir o 2
console.log(numeros.includes(2))

//Encontrando elementos(Referência)
const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]
const marca = marcas.find(function (marca) {
    return marca.nome === 'a';
});
console.log(marca);
//Removendo elementos
const numeros2 = [1, 2, 3, 1, 5];
//Final
const elementoRemovido = numeros2.pop();
console.log(elementoRemovido);
console.log(numeros2);
//Meio
const meio = numeros2.splice(2, 1);
console.log(meio);
console.log(numeros2);
//Início
const primeiro = numeros2.shift()
console.log(primeiro);
console.log(numeros2);

//Esvaziando um array
let numeros3 = [1, 2, 3, 4, 5];
let outros = numeros3
//Solução 1
numeros3 = [];
console.log(outros);

//Solução 2
numeros3.length = 0;
console.log(numeros);
console.log(outros);

//Solução 3
numeros.splice(0, numeros3.length);
console.log(numeros);
console.log(outros);

//Solução 4
while(numeros.length > 0) {
    numeros.pop();
}



