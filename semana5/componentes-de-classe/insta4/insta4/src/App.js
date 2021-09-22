import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'http://lorempixel.com/50/50/'}
          fotoPost={'http://lorempixel.com/200/150/'}
        />
        <Post
          nomeUsuario={'jorge'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'adilson'}
          fotoUsuario={'https://placeholder.pics/svg/50x50/FF71E5-9C37FF/FFBEF7-FF4B7A'}
          fotoPost={'http://placekitten.com/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
