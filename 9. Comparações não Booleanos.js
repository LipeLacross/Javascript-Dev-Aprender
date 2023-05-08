/*Falsy
undefined
null
0
false
''
Nan
*/

// Truthy - qualquer outra coisa

let corPersonalizada = 'vermelhor';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);