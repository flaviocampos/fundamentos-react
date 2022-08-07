import "./Card.css";
import React from "react";
// eslint-disable-next-line
export default (props) => {

    const cardStyle  ={
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }
    return (
    <div className="Card" style={cardStyle}>
        <div className="Titulo">{props.titulo}</div>
        <div className="Content">{props.children}</div>
    </div>
    )
}; 