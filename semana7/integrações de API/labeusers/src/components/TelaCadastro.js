import axios from "axios";
import React from "react";
import styled from "styled-components";

const ContainerCadastro= styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 30vh;
`
const InputEstilizado= styled.input`
margin: 5px;
`
const ButtonEstilizado= styled.button`
margin: 5px;
`

const headers = {
    headers: {
    Authorization: "Laura-Laurena-maryam"
    }
};

export default class TelaCadastro extends React.Component{
    state= {
        nome:"",
        email:""
    }
    
    handleNome= (e) =>{
        this.setState({nome: e.target.value})
    }
    handleEmail= (e) =>{
        this.setState({email: e.target.value})
    }
    fazerCadastro= async() =>{
        const url= 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body={
            name:this.state.nome,
            email:this.state.email
        }
        try{
        const res = await axios.post(url, body,headers)
            alert("usuário(a) cadastrado(a) com sucesso!")
            this.setState({nome:"", email:""})
        }
        catch(err) {
            alert(err.response.data.message);
        }
    }
    render(){
        return(
            <ContainerCadastro>
                <button onClick={this.props.irParaLista}>Ir a Lista de Usuários</button>
                <h1>Cadastro</h1>
                <InputEstilizado 
                    placeholder={"nome"}
                    value={this.state.nome}
                    onChange={this.handleNome}
                    />
                <InputEstilizado 
                placeholder={"email"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <ButtonEstilizado onClick={this.fazerCadastro}>Cadastrar</ButtonEstilizado>
            </ContainerCadastro>
        )
    }
}