import React, { Component } from 'react';

//Componentes
import Tabela from './Tabela/Tabela';
import FormLista from './FormLista/FormLista';

//CSS
import './ListaTelefonica.css';



class ListaTelefonica extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            nome : '',
            numero : '',
            listaDeContatos : []
        }
        
        this.handleInputText = this.handleInputText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleInputText(event){              

        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name] : value
        })
    }

    handleClick(){

        let contato = <tr scope="row">
                        <td>{this.state.nome}</td>
                        <td>{this.state.numero}</td>
                      </tr>
        
        this.setState((prev) => {

            let listaPrev = prev.listaDeContatos.slice();
            listaPrev.push(contato);

            return{
                listaDeContatos : listaPrev
            }           
        })
    }

    render(){
        return(
          <div className="container lista-telefonica">
            <div className="jumbotron">
              <h1>{this.props.nomeLista}</h1>
            </div>
              <Tabela contatos={this.state.listaDeContatos}/>
              <FormLista onChange={this.handleInputText} onClick={this.handleClick}/>
          </div>
        );
    }
}

export default ListaTelefonica;