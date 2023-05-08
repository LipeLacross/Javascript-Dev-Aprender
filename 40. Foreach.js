const numeros = [1,2,3,4,5];

/*
for (let i of numeros) {
    console.log(i);
}
 */

//Usando Foreach no lugar
/*Forma deprecated
numeros.forEach(function (numero){
    console.log(numero);
})
 */

//Forma Certa
numeros.forEach((numero, indice) => console.log(numero, indice))