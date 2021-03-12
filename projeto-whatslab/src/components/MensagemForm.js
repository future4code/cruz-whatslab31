import React from 'react';
import styled from 'styled-components'

const MensagemFormContainer = styled.div`
  display: flex;
  height: 10%;
  margin: 2%
`

const UsuarioInput = styled.input`
  width: 100px;
  border-radius: 8px;
  border: none;
`

const TextoInput = styled.input`
  flex: 1;
  margin-left: 8px;
  border-radius: 8px;
  border: none;
`
const ButtonEnviar = styled.button`
margin-left: 8px;
border-radius: 8px;
border:none;
padding: 0 12px;
`

export class MensagemForm extends React.Component {
  state = {
      userValue: '',
      textValue: ''
    }
  

  onChangeUser = (event) => {
    this.setState({userValue: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({textValue: event.target.value})
  }

  onSendMessage = (event) => {
    event.preventDefault()
    const message = {
      user: this.state.userValue,
      text: this.state.textValue
    }

    this.props.addMessage(message)

    this.setState({textValue: ''})
  }

  render() {
    return (
      <MensagemFormContainer onSubmit={this.onSendMessage}>
        <UsuarioInput type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.userValue}/>
        <TextoInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.textValue}/>
        <ButtonEnviar onClick={this.onSendMessage}>Enviar</ButtonEnviar>
      </MensagemFormContainer>
    );
  }
}