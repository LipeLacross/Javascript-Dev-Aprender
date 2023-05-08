function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    convidadosFesta = ['Amanda', 'Felipe', 'Nando', 'Raluca', 'Dilma', 'Nando']
    if (convidadosFesta.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}