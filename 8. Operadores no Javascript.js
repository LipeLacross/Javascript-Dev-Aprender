//Operadores aritiméticos
let salario = 100;
//+, -, *, /, **
console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(5 ** 5)

//++, --
let idade = 18;
console.log(--idade)
console.log(idade)

//Operadores de atribuição
let valorMonitor = 2000;
//valorMonitor = valorMonitor + valorMonitor
valorMonitor += valorMonitor
console.log(valorMonitor)
valorMonitor -= valorMonitor
console.log(valorMonitor)

//Operadores de igualdade
//Igualdade estrita
//compara os valores e os tipos
console.log(1 === 1);
console.log('1' === 1);

//igualdade solta
//compara apenas o valor
console.log(1 == 1);
console.log('1' == 1);

//Operador ternário
//Tem um cliente, se pontos > 100, ele vai ser premium
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
//Se pontos > 100, o tipo = premium, caso contrário, tipo = comum

//Operadores lógicos
//&& - operador and
console.log(true && true);//true
console.log(false && true);//false

//|| - operador or
console.log(false || true);//true
console.log(false || false);//false

//! - operador not
let aprovado = false
console.log(!aprovado);//true

