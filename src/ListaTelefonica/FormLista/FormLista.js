import React, {Component} from 'react';

import InputFormLista from './InputFormLista/InputFormLista';

function FormLista(props){

    return(
        <div className="form-group">
             <InputFormLista label="Nome" placeholder="Digite o nome" name="nome" onChange={props.onChange} />
             <InputFormLista label="Número" placeholder="Digite o número" name="numero" onChange={props.onChange} />
            <input className="btn btn-block btn-outline-info" onClick={props.onClick} type="submit"/>
        </div>
    )

}

export default FormLista;