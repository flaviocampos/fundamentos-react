import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>{props.nome}  {props.meio} <strong>{props.sobrenome} </strong></div>
    )
}