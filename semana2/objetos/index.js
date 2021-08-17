//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
// ------------------1--------------------
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"

// // ------------------2--------------------
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
// a) O que vai ser impresso no console?
// cachorro= nome: "Juca", 	idade: 3, 	raca: "SRD"
// gato= nome: "Juba", 	idade: 3, 	raca: "SRD"
// tartaruga= nome: "Jubo", 	idade: 3, 	raca: "SRD"

// b)O que faz a sintaxe dos três pontos antes do nome de um objeto?
// serve para se começar a partir daquele objeto, quase como 
// emitir uma copia mas nós podemos altera-la. 

// ------------------3--------------------
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//a) O que vai ser impresso no console?
// no primeiro console: falso no segundo: undefined 
// b) Explique o valor impresso no console. Você 
//sabe por que isso aconteceu?
// pois a altura nunca havia sido definida dentro do objeto.

//EXERCICIOS DE ESCRITA DE CÓDIGO
// ------------------1--------------------
const objeto1 ={
    nome: "Laura" ,
    apelidos: ["Lau", "Laurinha", "Lala"] ,

    frase:(objeto1) => { 
        console.log(`Eu sou ${objeto1.nome}, mas pode
        me chamar de: ${objeto1.apelidos[0]}, ${objeto1.apelidos[1]} 
        ou ${objeto1.apelidos[2]}.`) 
}     
}
  console.log((objeto1))
    
// ------------------2--------------------
const pessoa1= {
nome: "Clara",
idade: 17,
profissão: "estudante"
}
const pessoa2= {
nome: "Caio",
idade: 23,
profissão: "Historiador"
}
// minhaFuncao(pessoa) => { return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissão, pessoa.profissão.length]
// }
minhaFuncao = (pessoa) => { return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissão, pessoa.profissão.length]
}
minhaFuncao2 = (pessoa2) => { return [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissão, pessoa2.profissão.length]
}

// ------------------3--------------------
const carrinho=[]

const fruta1 = { 
    nome: "uva" ,
    disponibilidade: true
 }
const fruta2 ={
    nome: "maça",
    disponibilidade: true
 }
const fruta3 ={
    nome: "goiaba",
    disponibilidade: true
}
funçãoFruta1 = () => {carrinho.push(fruta1)}
funçãoFruta2 = () => {carrinho.push(fruta2)}
funçãoFruta3 = () => {carrinho.push(fruta3)}

console.log(funçãoFruta1(fruta1))
console.log(funçãoFruta2(fruta2))
console.log(funçãoFruta3(fruta3))
console.log(carrinho.length)

// DESAFIOS
// ------------------1--------------------
function usuario() {
    let nome= prompt("insira seu nome")
    let idade= Number( prompt("insira sua idade"))
    let profissão= prompt("insira sua profissão")
 return(nome, idade, profissão)
}
console.log([usuario.nome])
console.log([usuario.profissão])
console.log([usuario.idade])
 
// ------------------2--------------------

// ------------------3--------------------
