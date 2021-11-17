import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import App from '../../App.js';
import PaginaMatches from '../PaginaMatches/PaginaMatches.js';

const Container=styled.div`
border: 2px solid black ;
display: inline-flex;
justify-content:space-between;
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
const ButtomMatch=styled.button`
padding: 4px;
height: 40px;
width: 80px;
margin:10px;
margin-top: 20px;
`
function PaginaInicial(props) {

    const[profile,setProfile]=useState({}) 
    const[liked,setLiked]=useState(Boolean) 
    const getProfile=()=>{
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`)
        .then((res)=>{
            setProfile(res.data.profile)
        }).catch((err)=>{
            alert(err)
        })
    }
    
    const postChoosePerson=()=>{
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    // const botoesliked=()=>{
    //     if (liked===true){
    //         return <PaginaInicial mudaPagina={onClickMatches}/>
    //     }else if(liked===false){
    //         return <PaginaMatches mudaPagina={onClickMatches}/>
    //     }else{
    //         alert("Erro! Tente novamente.")
    //     }
    //    }

    return (
    <Container>
        <div>
            <div>
                <Titulo>Astromatch</Titulo>
                <ButtomMatch onClick={()=>props.mudaPagina("match's")}>Match's</ButtomMatch>
            </div>
            <div>
                <img src={profile.photo} alt="perfil"/>
                <h2>{profile.name}, {profile.age}</h2>
                <p>{profile.bio}</p>
            </div>
            <div>
                <button onClick={()=>postChoosePerson()}>X</button>
                <button onClick={()=>postChoosePerson()}>❤</button>
            </div>
        </div>
    </Container>
    );
}

export default PaginaInicial;