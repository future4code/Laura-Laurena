/* let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)  // aparecerá 10 e 5 já que a variante b foi mudada 

let a = 10
let b = 20
c = a // 10
b = c // 10
a = b // 10

console.log(a, b, c) // 10,10,10 

let p = prompt("Quantas horas você trabalha por dia?") // horasTrabalhadas
let t = prompt("Quanto você recebe por dia?") // dinheiroRecebido
alert(`Voce recebe ${t/p} por hora`) // horasTrabalhadas/dinheiroRecebido
*/
const nome = "Laura" 
const idade = 18
console.log   // como não tem valor nós não sabemos o tipo

const qualNome = prompt ("qual seu nome?")
const qualIdade = prompt ("qual sua idade?") 

console.log ("ola meu nome é", nome, "e tenho", idade, "anos.")  // apesar de prompt só gerar string meu javascript foi capaz de indentificar na idade um numero

const corAzul = sim = true
const corVermelho = não = true
const corAmarela = não = true

const corAzul = prompt ("você esta uzando roupa azul hoje?")
const corVermelho = prompt ("você esta usando roupa vermelha hoje")
const corAmarela = prompt ("você esta usando roupa amarela hoje?")
 
console.log (corAzul, corVermelho, corAmarela)
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
a = b
console.log a
console.log b