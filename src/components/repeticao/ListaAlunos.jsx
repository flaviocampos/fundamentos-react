import React from "react";
import alunos from '../../data/alunos';
// eslint-disable-next-line 
export default props => {
    // const lista = alunos.map(aluno => {
    //     return (<li key={aluno.id}>
    //         {aluno.id}) <i>{aluno.nome}</i> -- {aluno.nota}
    //     </li>
    //     );
    // });
    return (
        <div>
            <ul>
                {
                    alunos.map(aluno => {
                        return <li key={aluno.id}>
                            {aluno.id} - {aluno.nome} - {aluno.nota}
                        </li>
                    }

                    )


                }
            </ul>

        </div>
    )
}