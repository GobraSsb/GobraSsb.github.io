/*let nombre="Pepe"
let edad=22
let curso="Cocina con Aznar"

console.log("te llamas" + nombre + " y tu edad es: "+edad+ " Y estudias "+ curso)*/

/*function numeroAleatorio(max){
    let numero=Math.floor(Math.random()* max)+1;
    return numero
}
let numero=0
let cantidad =0
while (cantidad<6){
cantidad++
let numero = numeroAleatorio(49)
console.log(numero)
}*/
let alfabeto=["abcdefghijklmnñopqrstuvwxyz"]
let frase="pimientoz"
let paso=3

for(let i=0; i<frase.length; i++){
    let posicion=alfabeto.indexOf(frase[i])%alfabeto.length
    let letraCifrada=alfabeto[posicion+paso]
    console.log("la letra: "+ frase[i]+ " está en la posición: "
        +posicion+" y es: "+letraCifrada
    )
}

console.log(alfabeto[6])


