 let idade = Number(prompt("Digite sua idade"));
let salario = Number(prompt("Digite o seu salário mensal"));
 let emprestimo = Number(prompt("Digite o valor do empréstimo que você quer adquirir "));
 let limite = salario * 10;


 if (idade >= 25 && idade <= 60) {
     if (salario >= 2000){
         if (emprestimo < limite){
             
            console.log("emprestimo aprovado")
       } else {
             console.log("o valor solicitado não pode ser maior que 10x o salário")
         }
    } else {
         console.log("salario recusado")
     }
 }
 else {
     console.log("emprestimo recusado: idade inválida")
 }


 //fim do algoritimo



 let dia = Number (prompt ("Digite um numero de 1 a 7 que eu te digo qaul dia da semana é"));
      
 if (dia == 1) { 
     console.log ( "o dia é domingo")
 }
if ( dia == 2){
    console.log ( "o dia é segunda-feira")
}
if (dia == 3){
    console.log ( "o dia é terça-feira")
}
if ( dia == 4){
    console.log ("o dia é quarta-feira")
}
if ( dia == 5 ){
    console.log( "o dia é quinta-feira")
}
if (dia == 6){
    console.log ("sextou, hoje é sexta-feira")
}
if (dia ==7){
    console.log ("o dia é sabado")
}


//fim do algoritimo

let idade = Number(prompt("Digite sua idade"));
let status = prompt("aposentado?");
let status2 = prompt("estudante?");
    if (idade >=60 || status === "sim"){
        console.log("entrada gratuita");
    

let idade = Number(prompt("Digite sua idade"));
let status = prompt("Aposentado?")
let status2 = prompt("Estudante?")

if (idade >=60 || status === "sim"){  
    console.log("Entrada gratuita")
}
else if (idade >=18 && idade <= 59 && status2 === "sim"){    
console.log("Meia entrada, no valor de R$17.50")
}
else if (idade >=18 && idade <=59){
    console.log("Você pagará R$35.00 reais na entrada")
}
    else if(idade >=13 && idade <=17){
    console.log("Você pagará R$15.00 reais na entrada")
}
else if(idade >0 && idade <=12){
    console.log("Você pagará R$10.O0 reais na entrada")
}
else{
    console.log("erro")
}



//fim do algoritimo


let telefone = prompt("Digite seu numero de celular");

if (telefone.length == 9 && telefone[0] == 9){
    console.log("seu número está correto")
}
else{
    console.log("seu numero esta incorreto")
}


    


   



