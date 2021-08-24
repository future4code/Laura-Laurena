console.log("Boas vindas ao jogo de Blackjack!")

// const cartausuario=[]
// const cartacomputador=[]

if(confirm("Quer iniciar uma nova rodada?")) {
   const cartaUsuario = comprarCarta()          
   const cartaUsuario2 = comprarCarta()          
   const pontosUsuario= cartaUsuario.valor + cartaUsuario2.valor
   console.log(`Usuário - cartas: ${cartaUsuario.texto} ${cartaUsuario2.texto} -${pontosUsuario}` )                 
                                                     
   
   const cartaComputador = comprarCarta()                                        
   const cartaComputador2 = comprarCarta()
   const pontosComputador= cartaComputador.valor + cartaComputador2.valor          
      
   console.log(`Computador - cartas: ${cartaComputador.texto} ${cartaComputador2.texto} -${pontosComputador}`)                
                                                     
 
const usuarioGanhou = pontosUsuario > pontosComputador
const computadorGanhou = pontosComputador > pontosUsuario
const empate = pontosComputador===pontosUsuario
   if(empate===true){
     console.log("É um empate!")
   }else if(usuarioGanhou===true){
     console.log("Vitoria do usuario!")
   }else if(computadorGanhou===true){
     console.log("Vitoria do computador!")
   }
} else {
  console.log("O jogo acabou")
}     



 