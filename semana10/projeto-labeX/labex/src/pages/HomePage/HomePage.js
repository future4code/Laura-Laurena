import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const DivCentralizada= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
`
const Titulo= styled.h1`
font-size: 135px;
color:black;
position: absolute;
`
const Botao2= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
position: absolute;
top:70%;
left:52%;
display: flex;
justify-content:space-evenly;
width: 200px;
transition: .5s ease-in-out;
cursor: pointer;
:hover{
    background-color: #A020F0;
}
:active{
    background-color: darkmagenta;
}
`
const Botao1= styled.button`
padding:8px;
margin: 10px;
border-radius: 6px;
background-color:black;
color:lightgray ;
position: absolute;
top:70%;
right:52%;
display: flex;
justify-content:space-evenly;
width: 200px;
transition: .5s ease-in-out;
cursor: pointer;
:hover{
    background-color: #A020F0;
}
:active{
    background-color:darkmagenta ;
}
`

export default function HomePage(props) {
    const history= useHistory()
        
    const goToViagens=()=>{
        history.push("/trips/list")
    }
    const goToLogin=()=>{
        history.push("/login")
    }

    return( 
        <DivCentralizada>
            <Titulo>Labe-X</Titulo>
            <div>
                <Botao1 onClick= {goToViagens}>Ver Viagens</Botao1>
                <Botao2 onClick= {goToLogin}>Área de administração</Botao2>
            </div>
        </DivCentralizada>
    )
}