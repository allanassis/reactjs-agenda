import React, { Component } from 'react';
import logo from './logo.svg';
import Lista from './ListaTelefonica/ListaTelefonica';
import './App.css';

function Button(props){
  return(
    <button onClick={props.onClick}>{props.nome}</button>
  )
}


class App extends Component {

  render() {
    return (
        <Lista nomeLista="Agenda" nome="Nomes" numero="Numero"/>
    );
  }
}

export default App;
