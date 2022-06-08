import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default function IndiretaPai(props) {
    
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [pcd, setPcd] = useState(false)    
    
    function ReceberInformacoes(nome, idade, pcd) {
        /*console.log(nome, idade, pcd)*/
        setNome(nome)
        setIdade(idade)
        setPcd(pcd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{pcd ? 'Sim' : 'Não'}</span>
            </div>
            <IndiretaFilho
                quandoClicar={ReceberInformacoes} />
        </div>
    )
}