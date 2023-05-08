//Tipo primitivo
const mensagem = 'minha primeira mensagem ';

//Tipo objeto
const outraMensagem = new String('Bom dia');
console.log(outraMensagem.length);//tamanho da string
console.log(outraMensagem[2]);//retorna a string de um índice
console.log(mensagem.includes('primeira'));//vai verificar se existe
console.log(mensagem.startsWith('minha'));//vai ver se inicia com isso
console.log(mensagem.endsWith('mensagem'));// vai ver se acaba com isso
console.log(mensagem.indexOf('primeira'));//retorna o índice do início da string
console.log(mensagem.replace('minha', 'sua'))// troca duas strings
console.log(mensagem.trim())//vai tirar os espaçamentos em excesso
console.log(mensagem.split(' '))//vai separar as strings com base em um espaçamento


