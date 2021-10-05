import '../App.css';
import React from 'react';
import axios from 'axios';

const headers = {
    headers: {
    Authorization: "Laura-Laurena-maryam"
    }
};

export default class CardMusica extends React.Component{
    numeroVideos=(min, max)=>{
        Math.floor(Math.random * (max-min)+ min)
    }

    cards=(numeroVideos)=>{
        return <video src={`http://spoti4.future4.com.br/${numeroVideos(5,20)}.mp3`} />
    }

    render(){
    return (
    <div className="Menu">
        <header >
            <button>+</button> <span>criar Playlist</span>
        </header>
        <input type="text" placeholder="Nome da Playlist"/><button>ok</button>
        {this.cards}
    </div>
);}
}


