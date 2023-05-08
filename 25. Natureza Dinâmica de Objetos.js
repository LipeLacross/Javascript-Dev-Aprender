const mouse = {
    cor: 'red',
    marcar: 'dazz'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function (){
    console.log('Mudando DPI')
}
delete mouse.velocidade;
delete mouse.trocarDPI()
console.log(mouse);