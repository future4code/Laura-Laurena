//EXERCICIO 1-------------------------------------------------------------------
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // true pois é o contrario do booleano 2 

// let resultado = bool1 && bool2 // false 
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 // false pois o 2 é false
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) // true pois a booleano 1 é true
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado) // booleanos

// EXERCICIO 2 -----------------------------------------------------------------
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma) 
// vc precisa indicar que dentro do prompt haverá um numero usando a opcão "number" 
//antes do prompt, pois o prompt só devolverá strings, impossibilitando a soma. 
// resolução: --------------------------------------------------------------------
// let primeiroNumero = Number (prompt ("Digite um numero!"))
// let segundoNumero = Number (prompt ("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma) 

//Exercícios de escrita de código---------------------------------------------------
// exercicio 1 ----------------------------
// let idadeUsuario = Number (prompt ("insira sua idade!"))
// let idadeMelhorAmigo = Number (prompt ("insira a idade de seu melhor amigo(a)")) 

// console.log ("sua idade é maior a do seu melhor amigo?") 
// let idadeDosDois = false
// console.log (idadeDosDois)
// console.log (idadeUsuario - idadeMelhorAmigo)

//exercicio 2 --------------------------
// let numeroPar = Number (prompt ("insira um numero par!"))
// console.log (numeroPar % 2 )  // numeros pares não deixam restos, ja impares sim

//exercicio 3 -------------------------
// let idadeUsuario = Number (prompt ("insira sua idade!"))
// console.log ("sua idade media em meses é", idadeUsuario * 12) 
// console.log ("sua idade media em dias é", idadeUsuario * 365) 
// console.log ("sua idade media em horas é", idadeUsuario * 8766) 

//exercicio 4 -------------------------
let primeiroNumero = Number (prompt ("insira um numero!"))
let segundoNumero = Number (prompt ("insira outro numero!"))

console.log (primeiroNumero > segundoNumero)
console.log (primeiroNumero === segundoNumero)
console.log (primeiroNumero / segundoNumero)  // não aparece como true ou false, apenas o resultado
console.log (segundoNumero / primeiroNumero) // não aparece como true ou false, apenas o resultado
 



