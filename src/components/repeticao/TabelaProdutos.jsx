import './TabelaProduto.css';
import React from "react";
import produtos from "../../data/produtos";

// eslint-disable-next-line
export default (props) => {
    function obterLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr  key={produto.id} className = {i % 2 === 0 ? 'Par':''}>
                    <td>{produto.id}</td>
                    <td className='Descricao'>{produto.descricao}</td>
                    <td className='Preco'>{produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        }

        )
    }

    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th className='Descricao'>Descriçāo</th>
                        <th className='Preco'>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {obterLinhas()}
                </tbody>
            </table>
        </div>
    )
}