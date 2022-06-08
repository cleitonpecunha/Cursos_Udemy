import React from 'react'

export default function ParOuImpar(props) {    
    const isPar = (props.numero % 2 === 0);
    return (
        <div>
            <p>
            <strong>Valor Informado:</strong>{props.numero}
            </p>
            <p>
            {isPar ? <span>É Par</span> : <span>É Impar</span>}
            </p>
        </div>
    )
}