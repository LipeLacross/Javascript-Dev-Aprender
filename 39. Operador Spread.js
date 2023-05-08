const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro, ...segundo];
//[...primeiro, 'a',...segundo, 'a'];
console.log(combinado);

//const corado = combinado.slice();
const clonado = [...combinado]
console.log(clonado)

const clonado2 = [...primeiro, '%', ...segundo]
console.log(clonado2)