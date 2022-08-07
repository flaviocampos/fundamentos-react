export default function Aleatorio(props){
    const {minimo, maximo} = props;
    console.log(`Usando Destruction/Interpolation --> Minimo : ${minimo} -- Maximo: ${maximo}`);
    const numero = Math.floor(Math.random() * (props.maximo - props.minimo) ) + props.minimo;
    return (
        <>
        <p>Valor mínimo {props.minimo} e valor máximo { props.maximo}, e número sorteado é { numero }</p>
        </>
    )
}