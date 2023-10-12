import React, { useState } from 'react';

function Filtro() {
  const [filtroVisivel, setFiltroVisivel] = useState(false);
  const [dataVisivel, setDataVisivel] = useState(false);
  const [situacaoVisivel, setSituacaoVisivel] = useState(false);
  const [sexoVisivel, setSexoVisivel] = useState(false);

  const toggleFiltro = () => {
    setFiltroVisivel(!filtroVisivel);
  };

  const handleDataCheckboxChange = () => {
    setDataVisivel(!dataVisivel);
  };

  const handleSituacaoCheckboxChange = () => {
    setSituacaoVisivel(!situacaoVisivel);
  };

  const handleSexoCheckboxChange = () => {
    setSexoVisivel(!sexoVisivel);
  };

  return (
    <>
      <button className="botaoFiltro btn btn-primary" onClick={toggleFiltro}>Filtrar</button>

      <div className="filtro" style={{ display: filtroVisivel ? "inline" : "none" }}>
        <label className="filtroData" htmlFor="data"> data</label>
        <input className="filtroData" type="checkbox" id="data" onChange={handleDataCheckboxChange} />
        {dataVisivel && <input type="date" className="btn data" />}

        <label className="filtroSituacao" htmlFor="situacao"> situação</label>
        <input className="filtroSituacao" type="checkbox" id="situacao" onChange={handleSituacaoCheckboxChange} />
        {situacaoVisivel && (
          <select className="btn dropdown-toggle" id="acesso" name="situacao">
            <option> selecione uma opção</option>
            <option value={"permitido"}> Permitido </option>
            <option value={"negado"}> Negado </option>
          </select>
        )}

        <label className="filtroSexo" htmlFor="sexo"> sexo</label>
        <input className="filtroSexo" type="checkbox" id="sexo" onChange={handleSexoCheckboxChange} />
        {sexoVisivel && (
          <select className="btn dropdown-toggle" id="sexo" name="sexo">
            <option>selecione uma opção</option>
            <option value={"masculino"}> Masculino </option>
            <option value={"feminino"}> Feminino </option>
            <option value={"prefiro nao informar"}> Prefiro não informar </option>
          </select>
        )}
        
      </div>
    </>
  );
}

export default Filtro;
