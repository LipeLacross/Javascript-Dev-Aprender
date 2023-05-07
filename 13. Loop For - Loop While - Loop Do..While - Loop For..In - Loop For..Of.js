//For
for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!', i);
    if (i % 2 !== 0) {
        console.log(i + ' é par');
    }
}

//While
let i = 5;

while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i + ' é par');
    }
    i--;
}

//Do..While
let a = 0;
do {
    console.log('digitando', i);
    i++;
} while (i < 10)

//For..In
const pessoa = {
    nome: 'Felipe',
    idade: 26
};

for (let chave in pessoa) {
    console.log(chave, pessoa['nome'], pessoa['idade'])
}

const cores = ['Amarelo', 'Azul', 'Preto'];
for (let indice in cores) {
    console.log(indice, cores[indice])
}

//For..Of
for (let cor of cores) {
    console.log(cor);
}
