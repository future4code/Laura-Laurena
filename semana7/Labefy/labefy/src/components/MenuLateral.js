import '../App.css';
import React from 'react';
import axios from 'axios';


const headers = {
    headers: {
    Authorization: "Laura-Laurena-maryam"
    }
};

export default class MenuLateral extends React.Component{
    
    state={
    Playlists:[]
    }

    componentDidMount(){
        this.pegarPlaylists()
    }
    
    pegarPlaylists= async ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        try{
        const res = await axios.get(url,headers)
            this.setState({Playlists: res.data.result.list})
        }
        catch(err){
            alert("Ocorreu um problema, tente novamente")
        }
    }

    

    deletarPlaylist= async (id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist${id}`
        try{
        const res = await axios.delete(url,headers)
            alert("Playlist deletada!")
            this.pegarPlaylists()
        }
        catch(err){
            alert("Ocorreu um erro tente novamente")
        }
    }

render(){

    const PlaylistsLista = this.state.Playlists.map((play)=>{
        return( 
            <div key={play.id}>
                {console.log(this.pegarPlaylists)}
                {play.name}
                <button onClick={()=>this.deletarPlaylist(play.id)}>X</button>
            </div>
        )
    })

    return(
        <div>
            <h1>Playlists</h1>
            {PlaylistsLista}
        </div>
    )
}

}


