import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function statusNumero(num) {
    const n = parseInt(num)
    if (n % 2 === 0) return 'Par'
    if (n % 2 !== 0) return 'Impar'
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [statusNumber, setstatusNumber] = useState("Impar")
    const [statusFatorial, setstatusFatorial] = useState("Impar")

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        if (fatorial > 10000) {
            document.title = 'Chega!!!!!'
        }
    }, [fatorial])

    useEffect(function() {
        setstatusNumber(statusNumero(number))
    }, [number])

    useEffect(function() {
        setstatusFatorial(statusNumero(fatorial))
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
        <SectionTitle title="Exercício #01"/>
        <div className="center">
            <div>
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
            </div>

            <input type="number" className="input" 
                values={number} 
                onChange={(e => setNumber(e.target.value))}/>
        </div>
        <SectionTitle title="Exercício #02"/>
        <div className="center">
            <div>
                <span className="text">Status no Número: </span>
                <span className="text red">{statusNumber}</span>
            </div>
            <div>
                <span className="text">Status do Fatorial: </span>
                <span className="text red">{statusFatorial}</span>
            </div>
        </div>
        
        </div>
    )
}

export default UseEffect
