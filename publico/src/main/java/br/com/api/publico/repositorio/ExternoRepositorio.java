package br.com.api.publico.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.publico.modelo.ExternoModelo;

@Repository
public interface ExternoRepositorio extends CrudRepository<ExternoModelo, String>{


    // Método para filtrar visitantes por situação
    Iterable<ExternoModelo> findBySituacao(String situacao);

    // Método para filtrar visitantes por data
    Iterable<ExternoModelo> findByData(String data);

    // Método para filtrar visitantes por sexo
    Iterable<ExternoModelo> findBySexo(String sexo);

    // Método para filtrar visitantes por portaria
    Iterable<ExternoModelo> findByPortaria(String portaria);

    // Método para pesquisar visitantes por nome, CPF, RG e email
    Iterable<ExternoModelo> findByNomeContainingOrCpfContainingOrRgContainingOrEmailContaining(
        String nome, String cpf, String rg, String email
    );
    
}