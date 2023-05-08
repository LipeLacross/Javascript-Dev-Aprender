const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]
//pode o método find deixar vazio se não tiver parâmetros
const marca = marcas.find((marca) => marca.nome === 'a');

console.log(marca);
