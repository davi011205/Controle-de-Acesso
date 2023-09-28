function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}) {

    return (
        <form>
            <div className="dadosPessoais"> 
                <h1> Dados Pessoais</h1>
                <input type="date"  placeholder="data"  className="btn data"     onChange={eventoTeclado} value={obj.data}  name="data"/>
                <input type="text"  placeholder="nome"  className="form-control" onChange={eventoTeclado} value={obj.nome}  name="nome"   />
                <input type="text"  placeholder="rg"    className="form-control" onChange={eventoTeclado} value={obj.rg}    name="rg"   />
                <input type="text"  placeholder="cpf"   className="form-control" onChange={eventoTeclado} value={obj.cpf}   name="cpf"   />
                <input type="email" placeholder="email" className="form-control" onChange={eventoTeclado} value={obj.email} name="email"  />
                
                <label htmlFor="acesso">Situação: </label>
                <select className="btn dropdown-toggle" id="acesso" name="situacao" onClick={eventoTeclado}> 
                    <option> selecione uma opção</option>
                    <option value={"permitido"}> Permitido </option>
                    <option value={"negado"}> Negado </option>
                </select>

                <label htmlFor="foto">Foto: </label>
                <input id="foto" type="file"    onChange={eventoTeclado} value={obj.foto} name="foto" />

                <label htmlFor="fotoDoc">Foto do Documento: </label>
                <input id="fotoDoc" className="form-control-file" type="file" onChange={eventoTeclado} value={obj.fotoDoc} name="fotoDoc" />

                <input type="text" onChange={eventoTeclado} value={obj.observacao} name="observacao" placeholder="observação" className="form-control"/>
            </div>

            <div className="dadosContato"> 
                <h1>Dados para Contato</h1>
                <input type="text" onChange={eventoTeclado} value={obj.endereco} name="endereco" className="form-control" placeholder="endereço"/>
                <input type="text" onChange={eventoTeclado} value={obj.fone1}    name="fone1"    className="form-control" placeholder="fone 1"/>
                <input type="text" onChange={eventoTeclado} value={obj.fone2}    name="fone2"    className="form-control" placeholder="fone 2"/>
                <input type="text" onChange={eventoTeclado} value={obj.origem}   name="origem"   className="form-control" placeholder="origem"/>
                <input type="text" onChange={eventoTeclado} value={obj.outroDoc} name="outroDoc" className="form-control" placeholder="outro documento"/>

                <label htmlFor="sexo">sexo: </label>
                <select className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="sexo" name="sexo" onClick={eventoTeclado}> 
                    <option>selecione uma opção</option>
                    <option value={"masculino"}> Masculino </option>
                    <option value={"feminino"}> Feminino </option>
                    <option value={"prefiro nao informar"}> Prefiro não informar </option>
                </select>

                <label htmlFor="portaria">Portaria: </label>
                <select className="btn dropdown-toggle" id="portaria" name="portaria" onClick={eventoTeclado}> 
                    <option>selecione uma opção</option>
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
                    <input type="button" onClick={alterar}  value={"Alterar"}  className="btn btn-warning"/>
                    <input type="button" onClick={remover}  value={"Remover"}  className="btn btn-danger"/>
                    <input type="button" onClick={cancelar} value={"Cancelar"} className="btn btn-secondary"/>
                </div>
            }
        </form>
    )
}

export default Formulario;