import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './Formulario'
import Tabela from './Tabela'

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
    ativo: '',
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
  const[objVisitante, setObtVisitante] = useState(visitante);

  //useEffect
  useEffect(() => {
    fetch("http://localhost:8090/listar")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setVisitantes(retorno_convertido));
  }, [])

  // /obtendo os dados do form
  const aoDigitar = (e) => {
    setObtVisitante({...objVisitante, [e.target.name]:e.target.value});
  }

  //limpar formulario
  const limparForm = () => {
    setObtVisitante(visitante);
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

  return (
    <>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} obj={visitante} cadastrar={cadastrar} />
      <Tabela vetor={visitantes}/>
    </>
  )
}

export default App
