import "./ListaProdutos.css";
import React from 'react';
import Produtos from '../../data/produtos.js';

export default function ListaProdutos(props) {    
   
    function MostraLinhasProdutos(){
        return Produtos.map((Produto , i) => {
            return (
                <tr key={Produto.id} className={i % 2 === 0 ? 'CorSim' : 'CorNao'}>
                    <td className="Centralizar">{Produto.id} </td>
                    <td>{Produto.nome}</td>
                    <td>{Produto.valor.toFixed(2)}</td>
                    <td>{Produto.unidade}</td>
                </tr>
            )}
        )};    
    
    return (
        <div className="ListaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Unidade Medida</th>
                    </tr>
                </thead>
                <tbody>
                    {MostraLinhasProdutos()}
                </tbody>
            </table>
        </div>
    );
};