//If
var precoProduto=prompt("qual preço?")
console.log(typeof(precoProduto));

precoProduto= parseInt(precoProduto)
console.log(precoProduto)
console.log(typeof(precoProduto))


var valorPago=prompt("quantos voce pagou?");
valorPago=parseFloat(valorPago)
console.log(valorPago>= precoProduto)

if(valorPago==precoProduto){
  console.log("Parabéns Gordinho BOLOLLOLOLOLO")
} else if (valorPago > precoProduto) {
  console.log("há troco")
  troco=valorPago-precoProduto
  console.log("o troco do gordinho e de" +troco)
}else{
   console.log("faltou dinheiro gordinho")
  troco=valorPago-precoProduto
  console.log("faltou dinheiro "  + (-troco))
}
if(valorPago>=precoProduto){
  console.log("tem troco gordinho")
}

                
//string->Texto
//int/number->inteiro
//float/number->decimal




// var copoVerde;
// //
// copoVerde="coca-cola";
// var copoPreto="guarana";
// console.log(copoVerde,copoPreto);

// var copoBranco= "vazio"
//copoBranco=copoVerde;
//copoVerde=copoPreto;
//copoPreto=copoBranco;
//console.log(copoBranco,copoPreto);



var entradaUsuario=prompt("Qual o seu nome");

console.log(entradaUsuario+"!!")

console.log("Ola Palmeiras não tem mundial,"+entradaUsuario+"!! ");
var idadeUsuario= prompt("Qual sua idade?");

idadeUsuario= parseInt(idadeUsuario);

if(idadeUsuario > 18){
  console.log("Você e maior de idade!")
}
 else if (idadeUsuario == 18){
console.log("Já pode tomar pinga!")
 }
else if(idadeUsuario == 15){
  console
}



//else{console.log("Vou liga para o Corinthians!")
  //  } 