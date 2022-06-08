import React from 'react'

export default function DiretaFilho(props) {
    
    return (
        <div>
            <span>{props.nome} </span>
            <span>{props.idade} </span>
            <span>{props.pcd ? 'Sim' : 'Não'}!</span>
        </div>
    )
}