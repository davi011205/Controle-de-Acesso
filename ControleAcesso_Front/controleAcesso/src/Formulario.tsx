function Formulario({botao, eventoTeclado, cadastrar, obj}) {
    return (
        <form action="">
            <div className="dadosPessoais"> 
                <h1> Dados Pessoais</h1>
                <input type="date" placeholder="data"  />
                <input type="text" onChange={eventoTeclado} value={obj.nome} name="nome" placeholder="nome" className="form-control"/>
                <input type="text" onChange={eventoTeclado} value={obj.rg} name="rg" placeholder="rg" className="form-control" />
                <input type="text" onChange={eventoTeclado} value={obj.cpf} name="cpf" placeholder="cpf" className="form-control" />
                <input type="email" placeholder="email" className="form-control"/>
                <label htmlFor="acesso">Situação: </label>
                <select id="acesso"> 
                    <option value={"permitido"}> Permitido </option>
                    <option value={"negado"}> Negado </option>
                </select>

                <label htmlFor="foto">Foto: </label>
                <input id="foto" type="file" />

                <label htmlFor="fotoDoc">Foto do Documento: </label>
                <input id="fotoDoc" type="file" />
            
                
            <input type="text" onChange={eventoTeclado} value={obj.nome} name="observacao" placeholder="observação" />
            </div>

            
            <div className="dadosContato"> 
                <h1>Dados para Contato</h1>
                <input type="text" onChange={eventoTeclado} value={obj.endereco} name="endereco" placeholder="endereço" className="form-control"/>
                <input type="text" onChange={eventoTeclado} value={obj.fone1} name="fone1" placeholder="fone 1" className="form-control"/>
                <input type="text" onChange={eventoTeclado} value={obj.fone2} name="fone2" placeholder="fone 2" className="form-control"/>
                <input type="text" onChange={eventoTeclado} value={obj.origem} name="origem" placeholder="origem" className="form-control"/>
                <input type="text" onChange={eventoTeclado} value={obj.outroDoc} name="outroDoc" placeholder="outro documento" className="form-control"/>

                <label htmlFor="sexo">sexo: </label>
                <select id="sexo"> 
                    <option value={"masculino"}> Masculino </option>
                    <option value={"feminino"}> Feminino </option>
                    <option value={"prefiro nao informar"}> Prefiro não informar </option>
                </select>


                <label htmlFor="portaria">Portaria: </label>
                <select id="portaria"> 
                    <option value={"VG1 - Portaria Principal Amazonas, Av.5253"}> VG1 - Portaria Principal Amazonas, Av.5253 </option>
                    <option value={"VG2 - Portaria Alpes, R.Alpes, 418"}> VG2 - Portaria Alpes, R.Alpes, 418 </option>
                </select>
            </div>

            {
                botao
                ?
                <input type="button" value={"Cadastrar"} onClick={cadastrar} className="btn btn-primary"/>
                :
                <div>
                    <input type="button" value={"Alterar"} className="btn btn-warning"/>
                    <input type="button" value={"Remover"} className="btn btn-danger"/>
                    <input type="button" value={"Cancelar"} className="btn btn-secondary"/>
                </div>
            }
        </form>
    )
}

export default Formulario;