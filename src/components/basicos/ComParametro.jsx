import React from "react"

export default function ComParametro(props){

    console.log(props.titulo)
    console.log(props.subtitulo)
    return(

        <div>
            <h3>{props.subtitulo}</h3>
            <h2>{props.titulo}</h2>
        </div>
    )

}