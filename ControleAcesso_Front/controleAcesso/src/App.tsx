import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import Tabela from './Tabela'
import Filtro from './Filtro'
import Pesquisa from './Pesquisa'

function App() {

  //obj Visitante
  const visitante = {
    rg: '',
    nome: '',
    cpf: '',
    foto: '',
    fotoDoc: '',
    sexo: '',
    origem: '',
    situacao: '',
    observacao: '',
    endereco: '',
    fone1: '',
    fone2: '',
    email: '',
    data: '',
    outroDoc: '',
    portaria: ''
  }

  //useState
  const[btnCadastrar, setBtnCadastrar] = useState(true);
  const[visitantes, setVisitantes] = useState([]);
  const[objVisitante, setObjVisitante] = useState(visitante);

  //useEffect
  useEffect(() => {
    fetch("http://localhost:8090/listarPorData")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setVisitantes(retorno_convertido));
  }, [])

  // /obtem os dados do form
  const aoDigitar = (e) => {
    setObjVisitante({...objVisitante, [e.target.name]:e.target.value});
  }

  //limpa o formulario
  const limparForm = () => {
    setObjVisitante(visitante);
    setBtnCadastrar(true); //botao cadastro visivel e outros nao
  }

  //seleciona visitante
  const selecionaVisitante = (indice) => {
    setObjVisitante(visitantes[indice]);
    setBtnCadastrar(false);
  }

  //cadastra visitante
  const cadastrar = () => {
    fetch('http://localhost:8090/cadastrar', {
      method:'post',
      body: JSON.stringify(objVisitante),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        setVisitantes([...visitantes, retorno_convertido]);
        alert("Visitante cadastrado com sucesso");
        limparForm();
      }

    })
  }

  //remove visitante
  const remover = () => {
    fetch('http://localhost:8090/remover/' + objVisitante.rg, {
      method:'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

    alert(retorno_convertido.mensagem);

    //copia do vetor de visitante
    const visitanteTemp = [...visitantes];

    //indice
    const indiceAtual = visitanteTemp.findIndex((v) => {
      return v.rg === objVisitante.rg;
    });

    //remover visitando do visitanteTemp
    visitanteTemp.splice(indiceAtual, 1);

    //atualizar o vetor original
    setVisitantes(visitanteTemp);

    //limpar form
    limparForm();
    })
  }

  //altera visitante
  const alterar = () => {
    fetch('http://localhost:8090/alterar', {
      method:'put',
      body: JSON.stringify(objVisitante),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if(retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        
        alert("Visitante alterado com sucesso");

        //copia do vetor de visitante
        const visitanteTemp = [...visitantes];

        //indice
        const indiceAtual = visitanteTemp.findIndex((v) => {
          return v.rg === objVisitante.rg;
        });

        //altera visitando do visitanteTemp
        visitanteTemp[indiceAtual] = objVisitante;

        //atualizar o vetor original
        setVisitantes(visitanteTemp);

        limparForm();
      }

    })
  }

  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objVisitante} cancelar={limparForm} remover={remover} alterar={alterar} />
      <Filtro/>
      <Pesquisa />
      <Tabela vetor={visitantes} selecionar={selecionaVisitante}/>
    </div>
  )
}

export default App