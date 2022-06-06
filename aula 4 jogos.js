//for(let i=1;i>=10;i++){
//console.log("Ola,pela"+i+"ªvez!");
//}

let a=0;
let b=1;

//while (a + b < 10000){
  //let c=b
   //b=a+b
   //a=c
  //console.log(b)
  //}

let segredo=Math.floor(Math.random ()* 10);
let jogando=true;
let tentativa=5;

while(jogando) {
  if (tentativa==5)
let palpite=prompt ("qual seu palpite?");
  palpite=parseInt(palpite);
  
    if(tentativa== 5){
    console.log("você ultrapassou");
    jogando=false
} else{
      tentativa ++

      if(segredo==palpite){
  console.log("Parabens você ganhou uma cerveja !");
    jogando=false;
}else if(palpite>segredo){
  console.log("diminua o palpite ou vai perde a cerveja");
}else {
    console.log("aumeta o palpite ou vai perde a cerveja")
    }
  }
}

