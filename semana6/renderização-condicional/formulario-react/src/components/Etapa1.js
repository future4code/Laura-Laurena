import React from 'react';
import styled from 'styled-components';

const h1Centralizado= styled.h1`
display:flex;
align-itens:center;
justify-content:center;
`

export default class DadosPrimario extends React.Component {
render(){
    return (
    <div>    
    <h1Centralizado>dados pessoais</h1Centralizado>
    </div>    
    );
}
}
