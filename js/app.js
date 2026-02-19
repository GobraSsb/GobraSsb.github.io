/*let nombre="Pepe"
let edad=22
let curso="Cocina con Aznar"

console.log("te llamas" + nombre + " y tu edad es: "+edad+ " Y estudias "+ curso)*/

function numeroAleatorio(max){
    let numero=Math.floor(Math.random()max)+1)
    return numero
}

let numero = numeroAleatorio(49)
console.log(numero)
