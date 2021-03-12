import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MensagemForm } from './components/MensagemForm';
import background from './images/background-whats.jpg'

const AppContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  border: 2px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url(${background})
`

const MensagensConteiner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  color: white;
  font-size: 22px;
`

const TextoNegrito = styled.span`
  font-size: 28px;
  font-weight: bold;
`

class App extends React.Component {
  state = {
      messages: []
    }
  

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <AppContainer>
        <MensagensConteiner>
          {
            this.state.messages.map((message, index) => <p key={index}><TextoNegrito>{message.user}</TextoNegrito>{' : ' + message.text}</p>)
          }
        </MensagensConteiner>
        <MensagemForm addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;