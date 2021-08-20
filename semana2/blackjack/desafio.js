const cartasTotaisUsuario=[cartaUsuario = comprarCarta(),cartaUsuario2 = comprarCarta() ]
const cartasTotatisComputador=[cartaComputador = comprarCarta(),cartaComputador2 = comprarCarta() ]
    
if(confirm("Boas vindas ao jogo de Blackjack!\nQuer iniciar uma nova rodada?")) {
                   
 const pontosUsuario= cartaUsuario.valor + cartaUsuario2.valor
 const pontosComputador= cartaComputador.valor + cartaComputador2.valor                        
   
 if(cartasTotaisUsuario.valor==="A"){
   comprarCarta()
}else if(cartasTotatisComputador.valor==="A"){
   comprarCarta()                                              
}                                              
   const jogadaInicial=(confirm(`Suas cartas são: ${cartasTotaisUsuario[0].texto} ${cartasTotaisUsuario[1].texto} =${pontosUsuario} a carta revelada pelo computador é ${cartasTotatisComputador[0].texto}\ngostaria de comprar uma carta? `) )
      
if(jogadaInicial===true){
   const novaCarta= comprarCarta()
   cartasTotaisUsuario.push(novaCarta)

}else if(jogadaInicial===false && cartasTotaisUsuario<21){
    const novaCartaComputador= comprarCarta()
    cartasTotatisComputador.push(novaCartaComputador)
}            
   confirm(`Cartas do computador: ${cartaComputador.texto} ${cartaComputador2.texto} =${pontosComputador}`)                
                                                         
   const usuarioGanhou = pontosUsuario > pontosComputador
   const computadorGanhou = pontosComputador > pontosUsuario
   const empate = pontosComputador===pontosUsuario
        
   if(empate===true){
           
   alert(`Fim de jogo!\n Suas cartas são: ${cartasTotaisUsuario[0].texto} ${cartasTotaisUsuario[1].texto} =${pontosUsuario}\n Cartas do computador: ${cartasTotatisComputador[0].texto} ${cartasTotatisComputador[1].texto}= ${pontosComputador}\n É um empate!`)
            
   }else if(usuarioGanhou===true){
          
   alert(`Fim de jogo!\n Suas cartas são: ${cartasTotaisUsuario[0].texto} ${cartasTotaisUsuario[1].texto} =${pontosUsuario}\n Cartas do computador: ${cartasTotatisComputador[0].texto} ${cartasTotatisComputador[1].texto}= ${pontosComputador}\n Vitoria do usuario!`)
                
   }else if(computadorGanhou===true){
           
   alert(`Fim de jogo!\n Suas cartas são: ${cartasTotaisUsuario[0].texto} ${cartasTotaisUsuario[1].texto} =${pontosUsuario}\n Cartas do computador: ${cartasTotatisComputador[0].texto} ${cartasTotatisComputador[1].texto}=  ${pontosComputador}\n Vitoria do computador!`)          
   }    
} else { 
   console.log("O jogo acabou")
}     
