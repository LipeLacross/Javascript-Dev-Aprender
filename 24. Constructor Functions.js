/* camelCase
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular, tamanhoTela, capacidadeBateria, ligar() {
            console.log("Fazendo ligação com " + marcaCelular);
        }
    }
}
 */

//PascalCase
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular,
    this.tamanhoTela,
    this.capacidadeBateria,
    this.ligar = function () {
        console.log("Fazendo ligação com " + marcaCelular);
    }
}
const celular1 = new Celular('Iphone', 5.5, 5000)
