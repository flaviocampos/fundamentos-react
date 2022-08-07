import React from "react";

// eslint-disable-next-line
export default props => {

    const ehPar = props.numero % 2 === 0;
    return (
        <div>
            {ehPar ? <span>Par</span> : <span>Impar</span>} 
        </div>
    )
}