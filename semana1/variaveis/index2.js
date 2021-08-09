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
