//Criar um método para ler propriedades de um objeto
//Exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
};
console.log(exibirPropriedades(filme))

function exibirPropriedades(objeto) {
    let propriedadesString = [];
    for (let i in objeto) {
        if (typeof filme[i] === 'string') {
            propriedadesString.push(i)
        }
    }
    return propriedadesString
}