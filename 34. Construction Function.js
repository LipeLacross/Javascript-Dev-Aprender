//Criar um objeto postagem por meio de um contrutor
//titulo, mensagem, autor, vizualizacoes, comentarios, estaAoVivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.autor = autor;
    this.vizualizacoes = 0;
    this.comentarios = [];
    this.estaAoVivo = false;
}
let postagem = new Postagem('a', 'b', 'c')
console.log(postagem)