/*
function criarCelular() {
    const celular = {
        marcaCelular: 'ASUS',
        tamanhoTela: {
            vertical: 155, horizontal: 75
        },
        capacidadeBateria: 5000,
        ligar: function () {
            console.log("Fazendo ligação...")
        }
    }
    return celular
}
 */
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular, tamanhoTela, capacidadeBateria, ligar() {
            console.log("Fazendo ligação com " + marcaCelular);
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
celular1.ligar();