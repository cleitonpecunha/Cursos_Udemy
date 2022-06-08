import React from 'react'
import Primeiro from './componentes/basico/Primeiro'
import Segundo from './componentes/basico/Segundo'

export default function App(props)
{
    return 
        (
          <div id="App">            
            <Segundo 
              titulo    = "Situação do Aluno:"
              nomeAluno = "Bolsonaro ladrão"
              notaFinal = {5.0}
            />
            <Primeiro></Primeiro>            
          </div>
        )
}