//formula: delta = b² - 4*a*c  | (-b +- raiz de delta) / (2*a)

let a = 2
let b = -4
let c = -6

let delta = (b*b) - (4*a*c)
console.log("Delta: ",delta)

if(delta<0){
    console.log("Delta incompativel para continuar resolução")
}
else{
    let x1 = (-b + delta**0.5) / (2*a)
    let x2 = (-b - delta**0.5) / (2*a)
    
    console.log("A Primeira Raiz equivale a: ",x1)
    console.log("A Segunda Raiz equivale a: ",x2)
}