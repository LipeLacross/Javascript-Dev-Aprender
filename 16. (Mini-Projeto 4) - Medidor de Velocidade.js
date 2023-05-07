//Velocida Máxima de até 70
//A cada 5km acima do limite é um ponto na carteira
//Math.floor() -> vai arredondar o valor
//Caso os pontos somem 12 ou mais -> 'Carteira suspensa'
verificarVelocidade(140)

function verificarVelocidade(velocidade) {
    if (velocidade > 70) {
        const pontos = Math.floor((velocidade - 70) / 5)
        if (pontos > 12) {
            return console.log('Carteira suspensa, você obteve ' + pontos + ' pontos')
        } else {
            return console.log('Você obteve ' + pontos + ' pontos')
        }
    }
    return console.log('Velocidade respeitada')
}
