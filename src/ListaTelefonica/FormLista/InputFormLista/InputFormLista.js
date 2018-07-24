import React, {Component} from 'react';

function InputFormLista(props){
    return(
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor={props.name}>
                <h5><span class="badge badge-info">{props.label}</span></h5>
            </label>            
            <div className="col-sm-10">
                <input className="form-control-plaintext" placeholder={props.placeholder} name={props.name} onChange={props.onChange} type="text"/>
            </div>  
        </div>
    );
}

export default InputFormLista;