import React from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista= styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 29vh;
`

const CardUsuario = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
`

const headers = {
    headers: {
    Authorization: "Laura-Laurena-maryam"
    }
};

export default class TelaListaDeUsuario extends React.Component{
    
    state={
        usuarios:[]
    }

    componentDidMount(){
        this.pegarUsuarios()
    }
    
    pegarUsuarios= async ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        try{
        const res = await axios.get(url,headers)
            this.setState({usuarios: res.data})
        }
        catch(err){
            alert("Ocorreu um problema, tente novamente")
        }
    }

    deletarUsuario= async (id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        try{
        const res = await axios.delete(url,headers)
            alert("Usuário(a) deletado(a)!")
            this.pegarUsuarios()
        }
        catch(err){
            alert("Ocorreu um erro tente novamente")
        }
    }

    render(){

        const listaUsuarios = this.state.usuarios.map((user)=>{
            return( 
                <CardUsuario key={user.id}>
                    {user.name}
                    <button onClick={()=>this.deletarUsuario(user.id)}>X</button>
                </CardUsuario>
)
        })

        return(
            <ContainerLista>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h1>Lista de Usuários</h1>
                {listaUsuarios}
            </ContainerLista>
        )
    }
}