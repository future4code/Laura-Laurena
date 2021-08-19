// EXERCICIOS DE INTERPRETAÇÃO DE CODIGO
//------------------1--------------------
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//A) Ele verifica se o numero é par definindo se o resto da 
//divisão do numero digitado pelo usuario por 2 é igual a 0 
//significa que ele é par.

//B) ele imprime no console "Passou no teste" para numeros pares.

//C) ele imprime no console "Não passou no teste" para numeros 
//impares.

//------------------2--------------------
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    // break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//A) ele indica o preço da fruta indicada pelo usuario no prompt.

//B)O preço da fruta Maçã é R$ 2.25

//C) apareceria no console (O preço da fruta  pêra  é  R$  5) 

//------------------3--------------------
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
//A) a primeira linha declara que a constante numero é um prompt
// onde o usuario escolherá um numero.

//B)"Esse número passou no teste" se for - 10 "Essa mensagem 
//é secreta!!!"

//C) sim, pois a mensagem não esta definida a algo logo o 
//console.log vai sair como undefined e dá erro.

// EXERCICIOS DE ESCRITA DE CODIGO
//------------------1--------------------
const idadeUsuario = Number (prompt("insira sua idade"))
 if(idadeUsuario>= 18){
     console.log("você pode dirigir")
 }else{
     console.log("você não pode dirigir")
 }

//------------------2--------------------
const periodoDeAulaUsuario = prompt("digite qual periodo você estuda: M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
if(periodoDeAulaUsuario=== "M"){
    console.log("Bom Dia!")
}
else if (periodoDeAulaUsuario=== "V"){
    console.log("Boa Tarde!")
}
if(periodoDeAulaUsuario=== "N"){
    console.log("Boa Noite!")
}
//------------------3--------------------
const periodoDeAulaUsuario2 = prompt("digite qual periodo você estuda: M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
switch(periodoDeAulaUsuario2){
    case "M" :
    console.log("Bom Dia!")

    case "V" :
    console.log("Boa Tarde!")

    case "N" :
    console.log("Boa Noite!")
}
//------------------4--------------------
const filmeGenero = prompt("insira o genero de filme a ser assistido!").toLowerCase()
const ingressoPreço = Number (prompt("insira o preço dos ingressos!"))

if(filmeGenero=== "fantasia"&& ingressoPreço<15){
    console.log("Bom filme!")
}else {
    console.log("Escolha outro filme :(")
} 

// _____________DESAFIOS_________________
//------------------1--------------------
const filmeGenero = prompt("insira o genero de filme a ser assistido!").toLowerCase()
const ingressoPreço = Number (prompt("insira o preço dos ingressos!"))
const lanchinho = prompt("qual lanchinho irá comer?")

if(filmeGenero=== "fantasia"&& ingressoPreço<15){
    console.log("Bom filme!")
    console.log(`Aproveitei o seu ${lanchinho}`)
}else {
    console.log("Escolha outro filme :(")
} 
//------------------2--------------------
const nomeUsuario = prompt("insira o seu nome!")
const tipoDeJogo = prompt("insira o seu tipo de jogo: IN indica internacional; e DO indica doméstico").toUpperCase()
const etapaDoJogo = prompt("insira a etapa do jogo:SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final").toUpperCase()
const categoria = Number(prompt("insira a categoria: 1,2,3 ou 4!"))
const quantidadeDeIngressos = Number(prompt("insira a quantidades de ingressos!"))

if (tipoDeJogo==="DO"){
    if (etapaDoJogo==="SF"){
        if(categoria===1){
            const preço= 1320*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===2){
            const preço= 880*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===3){
            const preço= 550*quantidadeDeIngressos
            console.log(preço )
        }else(categoria===4){
            const preço= 220*quantidadeDeIngressos
            console.log( preço)
        }
    }
    else if (etapaDoJogo==="DT"){
        if(categoria===1){
            const preço= 660*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===2){
            const preço= 440*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===3){
            const preço= 330*quantidadeDeIngressos
            console.log(preço )
        }else(categoria===4){
            const preço= 170*quantidadeDeIngressos
            console.log( preço)
        }
    }
    else (etapaDoJogo==="FI"){
        if(categoria===1){
            const preço= 1980*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===2){
            const preço= 1320*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===3){
            const preço= 880*quantidadeDeIngressos
            console.log(preço )
        }else(categoria===4){
            const preço= 330*quantidadeDeIngressos
            console.log( preço)
        }
    }
}else (tipoDeJogo==="IN"){
    if (etapaDoJogo==="SF"){
        if(categoria===1){
            const preço= 1320*4.10*quantidadeDeIngressos
            console.log(preço)
        }else if(categoria===2){
            const preço= 880*4.10*quantidadeDeIngressos
            console.log(preço)
        }else if(categoria===3){
            const preço= 550*4.10*quantidadeDeIngressos
            console.log( preço)
        }else(categoria===4){
            const preço= 220*4.10*quantidadeDeIngressos
            console.log(preço )
        }
    }
    else if (etapaDoJogo==="DT"){
        if(categoria===1){
            const preço= 660*4.10*quantidadeDeIngressos
            console.log(preço)
        }else if(categoria===2){
            const preço= 440*4.10*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===3){
            const preço= 330*4.10*quantidadeDeIngressos
            console.log(preço )
        }else(categoria===4){
            const preço= 170*4.10*quantidadeDeIngressos
            console.log(preço )
        }
    }
    else (etapaDoJogo==="FI"){
        if(categoria===1){
            const preço= 1980*4.10*quantidadeDeIngressos
            console.log(preço )
        }else if(categoria===2){
            const preço= 1320*4.10*quantidadeDeIngressos
            console.log( preço)
        }else if(categoria===3){
            const preço= 880*4.10*quantidadeDeIngressos
            console.log( preço)
        }else(categoria===4){
            const preço= 330*4.10*quantidadeDeIngressos
            console.log( preço)
        }
    }
}
console.log("nome do cliente: "+nomeUsuario)
if (tipoDeJogo==="IN"){
    console.log("tipo de jogo: Internacional")
}else (tipoDeJogo==="DO"){
    console.log("tipo de jogo: Nacional")

}
if (etapaDoJogo==="SF"){
    console.log("etapa do jogo: semifinal")
}else if (etapaDoJogo==="DT"){
    console.log("etapa do jogo: decisão do terceiro lugar")
}else (etapaDoJogo==="FI"){
    console.log("etapa do jogo: final")
}
 console.log(categoria)
 console.log(preço)
