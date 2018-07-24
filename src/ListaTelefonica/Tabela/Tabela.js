import React, { Component } from 'react';

import CabecalhoTabela from './CabecalhoTabela/CabecalhoTabela';

function Tabela(props) 
{  
    return(
        <div className="table-responsive">
            <table className="table">
                <CabecalhoTabela nome="Nomes" numero="Números" />
                <tbody>                
                    {props.contatos}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela;