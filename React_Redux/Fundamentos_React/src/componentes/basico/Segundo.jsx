import React from 'react'

export default function Segundo(props) {
    const statusAluno = props.notaFinal > 7 ? 'Aprovado' : 'Reprovado seu burro!'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                Nome do Aluno:
                <strong> {props.nomeAluno} </strong>
                Tem a nota final:
                <strong> {props.notaFinal} </strong>
                E o status é:
                <strong> {statusAluno} </strong>
            </p>
        </div>
    )
}