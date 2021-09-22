import './App.css';
import axios from'axios';
import React from 'react'; 

const headers = {
  headers: {
    Authorization: "Laura-Laurena-Maryam"
  }
};

export default class App extends React.Component {
  state={
      UsuarioName: "",
      UsuarioEmail: ""
  };

  componentDidMount() {
    this.getAllUsuarios();
  }

  handleUsuarioName = (e) => {
    this.setState({ UsuarioName: e.target.value });
  };
  handleUsuarioEmail = (e) => {
    this.setState({ UsuarioEmail: e.target.value });
  };

  createUsuario = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.UsuarioName,
      email: this.state.UsuarioEmail
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        this.setState({ UsuarioName: "" });
        this.getAllUsuarios();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ UsuarioName: res.data.result.list });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render(){
    const UsuarioComponents = this.state.UsuarioName.map((usuario) => {
      return <li key={usuario.id}>{usuario.UsuarioName}</li>;
    });
  return (
    <div className="App">
      <h1>Labeuser</h1>
        <input
          placeholder="Nome do usuario"
          value={this.state.UsuarioName}
          onChange={this.handleUsuarioName}
        />
        <input
          placeholder="Email do usuario"
          value={this.state.UsuarioEmail}
          onChange={this.handleUsuarioEmail}
        />
        <button onClick={this.createUsuario}>Enviar</button>
        {UsuarioComponents}
    </div>
  );
  }
}

