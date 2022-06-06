let opcão1 = 0
let opcão2 = 0
let opcão3 = 0
let opcão4 = 0
let opcão5= 0
let opcão6= 0
 
  
console.log("###Começem a Votação!!###")

console.log (" 1  Jose");
console.log (" 2  Mario");
console.log (" 3  Bisonho");
console.log (" 4  Otavio");
console.log (" 5  Voto Nulo");
console.log (" 6  Voto em Branco");


for (let i = 1; i <= 6; i++) {

  voto = parseFloat(prompt("digite seu voto.."))


while (voto < 1 || voto > 6) { 
  voto = parseFloat(prompt("voto invalido, digite novamente!"))
  
}
    if (voto == 1) {
  opcão1++
    } else if (voto == 2) {
 opcão2++
    } else if (voto == 3) {
 opcão3++
    } else if (voto == 4) {
   opcão4++
    } else if (voto == 5) {
     opcão5++
    } else if (voto == 6) {
     opcão6++

      
    } else {
      console.log("digite um candidato valido!")
    }
  }
console.log("parabens pelo seu voto, aguarde a contagem...")

  console.log("Jose teve " + opcão1 + " votos");

  console.log(" Mario teve  " + opcão2);

  console.log("Bisonho teve " + opcão3);

  console.log(" Otavio teve " + opcão4);

  console.log(" NULO teve " + opcão5);

 console.log(" EM BRANCO teve " + opcão6);

let total=(opcão5 / 6*100)
console.log("O voto Branco teve "  +  total  +  " % ")

let Total=(opcão6 / 6*100)
console.log ( "O voto NULO teve " + Total+ " %");

if(opcão1>=opcão2 && opcão1>=opcão3 && opcão1>=opcão4 && opcão1>+opcão5 && opcão1>+opcão6){
  console.log("Parabens Jose ganhou a eleição")
}else if(opcão2>=opcão3 && opcão2>=opcão4 && opcão2>=opcão5 && opcão2>+opcão6 ){
  console.log("Parabens Mario ganhou a eleição")
}else if(opcão3>=opcão4 && opcão3>=opcão5 && opcão3>=opcão6){
  console.log("Bisonho ganhou a eleição")
}else if(opcão4>=opcão5 && opcão4>=opcão6){
  console.log("Otavio ganhou a eleição")
}else if(opcão5>=opcão6){
  console.log("Ninguem Ganhou eleição")
}else{
  console.log("voto em branco")
}