//variables
let num1=document.getElementById("numero1")
let num2 = document.getElementById("numero2")
let boton=document.getElementById("run")
let salida = document.getElementById("salida")

//eventos
boton.addEventListener("click", (e)=> {
   console.log("Me han pulsado: " + (parseInt(num1.value) + parseInt(num2.value)))
   for(let i=0; i<parseInt(num2.value); i++){
      TEXTO=num1.value+"<br>"
salida.innerHTML=TEXTO
}
})

//main
/*console.log(num1.value)
console.log(boton.id)*/
