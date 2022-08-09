import React from "react";
import If from "./If";

// eslint-disable-next-line
export default props => {
    const usuario = props.usuario || {};
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Visitante</strong>
            </If>
        </div>
    )
}