//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

const array = ['um', 'dois', 'três', 'quatro', 'cinco']

for(let i = 0; i < array.length; i++){
    console.log(`${i+1} - ${array[i]}`)
}