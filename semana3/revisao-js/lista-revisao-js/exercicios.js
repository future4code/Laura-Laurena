// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b)=> a-b)       
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   let numerosPares =[]
   for (let i = 0;i<array.length; i++){
       if (array[i]% 2 ===0){
           numerosPares.push(array[i])
       }
   }    
    return numerosPares
} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesElevados =[]
    for (let i = 0;i<array.length; i++){
        if (array[i]% 2 ===0){
            numerosParesElevados.push(array[i]**2)
        }
    }    
     return numerosParesElevados
}     
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

const [menorNumero, maiorNumero] = retornaArrayOrdenado([num1, num2])
     
return {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
      diferenca: maiorNumero - menorNumero
}

}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA===ladoB&&ladoB===ladoC){
        return "Equilátero"
    }else if (ladoA!==ladoB&&ladoA===ladoC){
        return"Isósceles"
    }else if (ladoA===ladoB&&ladoA!==ladoC){
        return"Isósceles"
    }else if (ladoA!==ladoB&&ladoB===ladoC){
        return"Isósceles"
    }else if (ladoA===ladoB&&ladoB!==ladoC){
        return"Isósceles"
    }else{ladoA!==ladoB&&ladoB!==ladoC&&ladoA!==ladoC
        return"Escaleno"
    }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    nome= 'O Diabo Veste Prada',
    ano= 2006,
    diretor= 'David Frankel',
    atores= ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
   
return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    nome= "Astrodev",
	idade= 25,
	email= "astrodev@labenu.com.br",
	endereco= "Rua do Futuro, 4"
    return { ...pessoa, nome: "ANÔNIMO" }
} 

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const validarPessoa = pessoa => (
        pessoa.altura > 1.5 &&
        pessoa.idade > 14 &&
        pessoa.idade < 60)
   
    return pessoas.filter(validarPessoa)
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const validarPessoa = pessoa => (
        pessoa.altura > 1.5 &&
        pessoa.idade > 14 &&
        pessoa.idade < 60)
    return pessoas.filter(pessoa => !validarPessoa(pessoa))
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}