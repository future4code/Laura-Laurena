
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PaginaInicial from './components/PaginaInicial/PaginaInicial';
import PaginaMatches from './components/PaginaMatches/PaginaMatches';

function App() {   
  const[paginaNaTela, setPaginaNaTela]=useState("inicio")

  const renderizaPagina=()=>{
    if (paginaNaTela==="inicio"){
        return <PaginaInicial mudaPagina={onClickMatches}/>
    }else if(paginaNaTela==="match's"){
        return <PaginaMatches mudaPagina={onClickMatches}/>
    }else{
        alert("Erro! recarregue a pagina.")
    }
    }

  const onClickMatches=(nomeDaPagina)=>{
      setPaginaNaTela(nomeDaPagina)
      
  }

  return (
    <div>
      {renderizaPagina()}
    </div>
  );
}

export default App;
