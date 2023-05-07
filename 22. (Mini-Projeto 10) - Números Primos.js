//Criar função para mostrar os números primos
console.log(exibirNumerosPrimos(15));

function exibirNumerosPrimos(limite) {
    let listaPrimos = [];
    for (let numero = 1; numero <= limite; numero++) {
        let primo = true;
        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                primo = false;
                break;
            }
        }
        listaPrimos.push(numero + ' ' + primo)
    }
    return listaPrimos
}
