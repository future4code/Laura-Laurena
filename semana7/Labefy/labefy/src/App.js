import MenuLateral from './components/MenuLateral';
import React from 'react';
import axios from 'axios';

export default class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header >
        <h1>Labefy</h1>
      </header>
      <input type="text" placeholder="Busca" id="campoDeBusca" /><button>0</button> <br/>
      <p>+ criar Playlist</p>
      <input type="text" placeholder="Nome da Playlist"/><button>+</button>
      <MenuLateral/>
    </div>
  );}
  }





