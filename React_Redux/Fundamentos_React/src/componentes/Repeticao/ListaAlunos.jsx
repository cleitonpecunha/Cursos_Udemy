import React from 'react'
import Alunos from '../../data/alunos.js';

export default function ListaAlunos(props) {    
    const lisAlunos = Alunos.map(Aluno => {
        return (
            <li key={Aluno.id}>
                {Aluno.id}) {Aluno.nome} - {Aluno.nota}
            </li>
        )
    });
    
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {lisAlunos}
            </ul>
        </div>
    )
};