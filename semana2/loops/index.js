//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
//-----------------1-------------------
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 
//adicionando 1 numero a valor até 4 e depois imprimindo
//o valor final (4) no console.
//-----------------2-------------------
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
//A)numeros maiores a 18 (19,21,23,25,27,30)
//B) Não 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    if (numero > 18) {
          console.log(lista[numero])
      }
  }
//-----------------3-------------------
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// imprime * e vci adicinando mais 1 a cada loop até a quantidade
//adicinada pelo usuario então
//*  
//** 
//***
//****
//EXERCICIOS DE ESCRITA DE CÓDIGO
//-----------------1-------------------
const animaisDeEstimação=Number(prompt("quantos animais de estimação você tem?"))
let i=0
array=[]
if(animaisDeEstimação===0){
    console.log("Que pena! Você pode adotar um pet!")
}while(i<animaisDeEstimação){
   let nomesAnimais= prompt("insira o nome do seu pet")
   array.push(nomesAnimais) 
   i+=1
}
console.log(array)
//-----------------2-------------------
// A)
let arrayOriginal=[80,30,130,40,60,21,70,120,90,103,110,55]
let i = 0
for(let numero of arrayOriginal){
     numero=arrayOriginal[i] 
     console.log(arrayOriginal[i])
    i++
 }
// B)
let arrayOriginal=[80,30,130,40,60,21,70,120,90,103,110,55]
let i = 0
for(let numero of arrayOriginal){
     numero=arrayOriginal[i] 
     console.log(arrayOriginal[i]/10)
    i++
}    
// C)
let arrayOriginal=[80,30,130,40,60,21,70,120,90,103,110,55]
let i = 0     
let novoArray= [] 
for(let numero of arrayOriginal){
    if(numero % 2===0){
      novoArray.push(numero)   
    }   
}console.log(novoArray)

// D)
let arrayOriginal=[80,30,130,40,60,21,70,120,90,103,110,55]
let i = 0
for(let numero of arrayOriginal){
     numero=arrayOriginal[i] 
     console.log("o elemento do index "+arrayOriginal.indexOf(numero)+" é: "+arrayOriginal[i])
    i++
}   

