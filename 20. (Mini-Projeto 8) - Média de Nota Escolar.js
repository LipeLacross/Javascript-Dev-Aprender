//Exercício Nota Escolar
//Obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A
const array = [70, 70, 80];
console.log(resultadoDosAlunos(array))

function resultadoDosAlunos(notas) {
    medias = [];
    for (let i of array) {
        if (i >= 0 && i <= 59) {
            medias.push(i + ' F')
        } else if (i >= 60 && i <= 69) {
            medias.push(i + ' D')
        } else if (i >= 70 && i <= 79) {
            medias.push(i + ' C')
        } else if (i >= 80 && i <= 89) {
            medias.push(i + ' B')
        } else if (i >= 90 && i <= 100) {
            medias.push(i + ' A')
        } else {
            medias.push('Inválido')
        }
    }
    return medias
}

console.log(mediaDaTurma(array))

function mediaDaTurma(lista) {
    let soma = 0
    for (let i of lista) {
        soma += i
    }
    return soma / lista.length
}

function resultadoDaTurma(notas) {
    for (let i of array) {
        if (i >= 0 && i <= 59) {
            return 'F'
        } else if (i >= 60 && i <= 69) {
            return 'D'
        } else if (i >= 70 && i <= 79) {
            return 'C'
        } else if (i >= 80 && i <= 89) {
            return 'B'
        } else if (i >= 90 && i <= 100) {
            return 'A'
        } else {
            return 'Inválido'
        }
    }
}
console.log(resultadoDaTurma(mediaDaTurma(array)))//C