function Tabela({vetor}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Nome</th>
                    <th>Rg</th>
                    <th>Cpf</th>
                    <th>Email</th>
                    <th>Foto</th>
                    <th>Foto do Documento</th>
                    <th>Sexo</th>
                    <th>Situação</th>
                    <th>Mais...</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj) => (
                        <tr >
                            {/* <td>{indice+1}</td> */}
                            <td>{obj.data}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.rg}</td>
                            <td>{obj.cpf}</td>
                            <td>{obj.email}</td>
                            <td>{obj.foto}</td>
                            <td>{obj.fotoDoc}</td>
                            <td>{obj.sexo}</td>
                            <td>{obj.situacao}</td>
                            <td><button className="btn btn-success">Visuazlizar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Tabela;