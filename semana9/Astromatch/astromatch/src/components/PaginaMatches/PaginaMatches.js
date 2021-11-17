import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container=styled.div`
border: 2px solid black ;
display: inline-flex;
flex-direction: column;
justify-content: space-between;
margin-left: 520px;
margin-top: 80px;
width: 400px;
height: 500px;
`
const Titulo=styled.h2`
display: flex;
margin-left: 10px;
height: 40px;
`
const ButtomInicio=styled.button`
padding: 4px;
height: 40px;
width: 80px;
margin:10px;
margin-top: 20px;
`
const Header=styled.header`
display: flex;
justify-content: space-between;

`
function PaginaMatches(props) {
    const[listaDeMatchs,setListaDeMatchs]=useState([])

    const getMatches=()=>{
        axios.get().then((res)=>{
            setListaDeMatchs(res.data.matches)
        }).catch((err)=>{
            alert(err.data)
        })
    }

    const listaMapeada= listaDeMatchs.map((match)=>{
        return(<div photo={match.photo} name={match.name}/>)
    })

    return (
    <Container>
        <Header>
        <Titulo>Astromatch</Titulo>
        <ButtomInicio onClick={()=>props.mudaPagina("inicio")}>Inicio</ButtomInicio>
        </Header>
        {listaMapeada}
    </Container>
    );
}

export default PaginaMatches;