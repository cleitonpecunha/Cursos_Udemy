import "./Cards.css";
import React from 'react'

export default function Cards(props) 
{
const StyleCards = {backgroundColor: props.color || '#F00',
                    borderColor: props.color || '#F00'}
    
    return (
        <div className="Cards" style={StyleCards}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>      
        </div>
    )
}