import "./App.css";

import Familia from "./components/basicos/Familia";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOrimpar from "./components/condicional/ParOrimpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

// eslint-disable-next-line
export default () => {
  const tag = <strong>muito esforçado...</strong>;
  return (
    <div className="App">
      <h1>Fundamentos do React - Flavio Campos</h1>

      <div className="Cards">

        <Card titulo="#08 - Condicional" color="DarkSalmon">
          <ParOrimpar numero={21}/>

          <UsuarioInfo  usuario={{nome:'Flavio'}}/>          
          <UsuarioInfo/>
        </Card>
        
        <Card titulo="#07 - Repetição de Produtos" color="Aquamarine">
          <TabelaProdutos/>
        </Card>

        <Card titulo="#06 - Repetição de Alunos" color="#FF4C65">
          <ListaAlunos/>
        </Card>
 
        <Card titulo="#05 - Componente com Filhos" color="#F2AE72">
          <Familia sobrenome="Campos">
            <FamiliaMembro nome="Flavio" meio="Rodrigues"/>
            <FamiliaMembro nome="Simone" meio="Maria Nader"/>
            <FamiliaMembro nome="Luisa"  meio="Nader"/>
            <FamiliaMembro nome="Therezinha"  meio="Jesus"/>
          </Familia>
        </Card>

        <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
          <Aleatorio minimo={1} maximo={60} />
        </Card>

        <Card titulo="#03 - Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 - Fragmento" color="#E8B71A">
          <ComParametro
            titulo="Título passado como parâmetro"
            subtitulo="Subtítulo passado como parâmetro"
          />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
          <Primeiro>Aparece algo?ssssss</Primeiro>
          <h2>Você é , {tag} só isto...., ok, 123</h2>
        </Card>

      </div>


    </div>
  );
};
