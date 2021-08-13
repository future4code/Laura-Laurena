// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
   const altura = Number(prompt())
   const largura = Number(prompt())
   areaRetangulo = altura * largura
   console.log (areaRetangulo)
}
console.log (calculaAreaRetangulo())

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento,) {
  // implemente sua lógica aqui
    anoAtual = Number(prompt())
    anoNascimento = Number(prompt())
    idade = anoAtual - anoNascimento 
   console.log (idade)  
}
console.log (imprimeIdade())

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui 
  const Imc = peso/(altura * altura)
  return Imc
}
 console. log (calculaIMC())

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome= prompt ()
  idade = Number (prompt())
  email = prompt ()
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
console. log (imprimeInformacoesUsuario())

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt () 
  const cor2 = prompt () 
  const cor3 = prompt () 
  console.log ([cor1, cor2, cor3])
}
console.log (imprimeTresCoresFavoritas())

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt ()
  return string.toUpperCase()
}
console.log (retornaStringEmMaiuscula())

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  quantidadeIngressos = custo/valorIngresso
  return quantidadeIngressos
}
console.log(calculaIngressosEspetaculo())

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}
console.log(checaStringsMesmoTamanho())

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]  
}
console.log (retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const arrayTeste= array[0] 
} 

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}