import React from 'react'
import If from './If'

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <p>
                Seja Bem vindo: <strong>{usuario.nome}</strong>
                </p>
            </If>
            
            <If test={!usuario || !usuario.nome}>
                <p>
                Seja Bem vindo: <strong>Sem identificação</strong>
                </p>
            </If>

        </div>
    )
}