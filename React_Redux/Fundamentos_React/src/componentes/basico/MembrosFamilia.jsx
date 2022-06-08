import React from 'react';

export default function MembrosFamilia(props) {
    return (
        <div>{props.nome} <strong>{props.sobrenome}</strong></div>
    )
}