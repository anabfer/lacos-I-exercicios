//Crie um programa que peça um número para o usuário. Com este número, o código deve imprimir a tabuada do número, de 1 a 10.

let numero = Number(prompt('Digite um número:'))

for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero*i}`)
}