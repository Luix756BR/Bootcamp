let peso = 70.5
let altura = 1.95
let imc = peso / (altura * altura)
console.log("Peso: ",peso)
console.log("Altura: ",altura)
console.log("IMC: ",imc)

if(imc<18.5){
    console.log("Classificação: ABAIXO DO PESO")
}
else if(imc<25){
    console.log("Classificacão: PESO NORMAL")
}
else if(imc<30){
    console.log("Classificação: SOBREPESO")
}
else{
    console.log("Classificação: OBESIDADE MÓRBITA")
}