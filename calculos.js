function Test(){
 let primerValor=document.getElementById("salario")

 let dni =primerValor.value*0.07
 document.getElementById("dinss").value=dni

  let resultado =primerValor.value
 document.getElementById("sbm").value=resultado

 
 
   let slneto=resultado-dni
   document.getElementById("sneto").value=slneto

   let salarioAn=slneto*12
   document.getElementById("sneto").value=salarioAn

 }