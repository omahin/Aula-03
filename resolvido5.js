//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritmética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

let operação = 'subtração'
let numero1 = 5
let numero2 = 5

switch(operação){
    case 'soma':
        console.log(`O resultado da soma é: ${numero1 + numero2}`)
        break
    case 'multiplicação':
        console.log(`O resultado da multiplicação é: ${numero1*numero2}`)
        break
    case 'divisão':
        console.log(`O resultado da divisão é: ${numero1/numero2}`)
        break
    case 'subtração':
        console.log(`O resultado da subtração é: ${numero1-numero2}`)
        break
    default:
        console.log('Informe dados válidos')
}


