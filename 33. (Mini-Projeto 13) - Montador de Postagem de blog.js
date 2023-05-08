//Eu quero que você crie um objeto de postagem de blog que vai conter as seguintes propriedades
//postagem
/*
titulo
mensagem
autor
vizualizacoes
comentarios
    (autor, mensagem)
estaAoVivo
 */

let postagem = {
    titulo: 'Oi',
    mensagem: 'Tudo bem?',
    autor: 'Raluca',
    vizualizacoes: 5,
    /*
    comentarios: {
        autor: '',
        mensagem: ''
    },
     */
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVico: false
}
console.log(postagem)