//4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo: 

// a) números de 1 a 100 

for (let numeros = 1; numeros<= 100; numeros++){
    console.log(numeros)
}

//b) quando chegar no número 50 interrompa a instrução e pare o loop 

for (let numeros = 1; numeros<=100; numeros++){
    if (numeros === 51){
        break
   }
   console.log(numeros)
}

//c) quando chegar no número 50 pule a instrução 

for (let numeros = 1; numeros<=100; numeros++){
    if (numeros === 50){
        continue
    }
    console.log(numeros)
}