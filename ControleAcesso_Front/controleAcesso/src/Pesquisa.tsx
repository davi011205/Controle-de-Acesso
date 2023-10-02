function Pesquisa() {
    return (
        <>
            <label className="pesquisa" htmlFor="pesquisa">Pesquisar</label>
            <input id="pesquisa" className="form-control" style={{width: "auto", display: "inline"}} type="text" placeholder="nome, cpf, rg, email..."/>
        </>
    )
}

export default Pesquisa;