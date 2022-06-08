import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallBackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    },[setCount])
    
    {/*function inc(delta) {
        setCount(count + delta)
    }*/}

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <span className="text">{count}</span>

                {/*<div>
                    <button className="btn"
                        onClick={() => inc(6)}>+6</button>
                    <button className="btn"
                        onClick={() => inc(12)}>+12</button>
                    <button className="btn"
                        onClick={() => inc(18)}>+18</button>
                </div>*/}

                <UseCallbackButtons inc={inc}/>

            </div>
        </div>
    )
}

export default UseCallback
