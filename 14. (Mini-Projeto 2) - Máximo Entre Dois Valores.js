//Escreva uma função que usar 2 números e retorna o maior entre eles
/*
function acharMaior(a, b) {
    if (a >= b) {
        return a
    } else {
        return b
}
*/
function acharMaior(a, b) {
    return a >= b ? a : b;
    }
console.log(acharMaior(4, 5));
console.log(acharMaior(5, 4));