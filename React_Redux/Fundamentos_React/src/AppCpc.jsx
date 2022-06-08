import "./AppCpc.css";
import React from 'react';
import Primeiro from './componentes/basico/Primeiro';
import Segundo from './componentes/basico/Segundo';
import Fragmento from './componentes/basico/Fragmento';
import Aleatorio from './componentes/basico/Aleatorio';
import Cards from './componentes/Layout/Cards';
import Familia from "./componentes/basico/Familia";
import MembrosFamilia from "./componentes/basico/MembrosFamilia"
import ListaAlunos from "./componentes/Repeticao/ListaAlunos";
import ListaProdutos from "./componentes/Repeticao/ListaProdutos";
import ParOuImpar from "./componentes/Condicionamento/ParOuImpar";
import UsuarioInfo from "./componentes/Condicionamento/UsuarioInfo";
import DiretaPai from "./componentes/Comunicacao/DiretaPai";
import IndiretaPai from "./componentes/Comunicacao/IndiretaPai";
import Input from "./componentes/Formulario/Input";
import Contador from "./componentes/Contador/Contador";
import Mega from "./componentes/Mega/Mega";

export default function AppCpc(props) {
    return (
        <div className="AppCss">
            <h1>Fundamento do React-Redux</h1>
            <div className="CardsCss">
                
                <Cards titulo="#13 - Desafio MegaSenna" color='#9966cc'>
                     <Mega qtde={8}/>
                </Cards>
                
                <Cards titulo="#12 - Contador" color='#9966cc'>
                    <Contador numeroInicial={0}/> 
                </Cards>
                
                <Cards titulo="#11 - Componente Controlado" color='#9966cc'>
                    <Input /> 
                </Cards>
                
                <Cards titulo="#10 - Comunicação Indireta" color='#e9d66b'>
                    <IndiretaPai /> 
                </Cards>
                
                <Cards titulo="#09 - Comunicação Direta" color='#c32148'>
                    <DiretaPai></DiretaPai>
                </Cards>

                <Cards titulo="#08 - Condionamento (ParOuImpar)" color='#f4c2c2'>
                    <ParOuImpar numero={3}/>
                    <UsuarioInfo usuario={{nome: 'Cleiton'}}/>
                    <UsuarioInfo usuario={{email: 'cleitonpecunha@gmail.com'}}/>
                </Cards>

                <Cards titulo="#07 - Desafio Repetição" color='#808080'>
                    <ListaProdutos />
                </Cards> 
                
                <Cards titulo="#06 - Repetição" color='#ff6347'>
                    <ListaAlunos></ListaAlunos>
                </Cards> 

                <Cards titulo="#05 - Componente com Filhos" color='#ffe135'>
                    <Familia sobrenome="Ferreira Silva" >
                      <MembrosFamilia nome="Pedro" />
                      <MembrosFamilia nome="José" />
                      <MembrosFamilia nome="Zenildo" />
                    </Familia>
                </Cards>                
                
                <Cards titulo="#04 - Desafio Aleatório" color='#445bc7'>
                    <Aleatorio min={1} max={60}/>
                </Cards>                
                
                <Cards titulo="#03 - Fragmento" color='#ee638f'>
                    <Fragmento />
                </Cards>                
                
                <Cards titulo="#02 - Situação do Aluno" color='#76b81b'>
                    <Segundo
                        titulo="Situação do Aluno:"
                        nomeAluno="JoãoZinho"
                        notaFinal={5.0}
                />
                </Cards>            
                
                <Cards titulo="#01 - Primeiro Componente" color='#ccaa00'>
                    <Primeiro></Primeiro>
                </Cards>
            </div>            
        </div>
    )
}