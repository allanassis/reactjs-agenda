import React, {Component} from 'react';

function CabecalhoTabela(props) {
    return(
        <thead>
            <tr>
                <th scope="col">{props.nome}</th>
                <th scope="col">{props.numero}</th>
            </tr>
        </thead>
    );
}

export default CabecalhoTabela;