import React from 'react'

export default function IndiretaFilho(props) {
    const qc = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20)) +50
    return (
        <div>
            <div>Filho</div>
            <button onClick={ function (e) {
            qc('Milton', gerarIdade(), true) }}>                
            Fornecer Informações</button>
        </div>
       
    )
}