import axios from'axios';
import React from 'react'; 
import TelaListaDeUsuario from './components/TelaListaDeUsuario';
import TelaCadastro from './components/TelaCadastro';


export default class App extends React.Component {
  state={
    telaAtual: "Cadastro"
  }
  escolherTela= () => {
    switch (this.state.telaAtual){
      case "Cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "Lista":
        return <TelaListaDeUsuario irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

  irParaCadastro= () =>{
    this.setState({telaAtual:"Cadastro"})
  }

  irParaLista= () =>{
    this.setState({telaAtual:"Lista"})
  }

  render(){
  return (
    <div>
      {this.escolherTela()}
    </div>
  );
  }

}
