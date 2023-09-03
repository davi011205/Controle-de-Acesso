package br.com.api.publico.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.publico.modelo.ExternoModelo;

@Repository
public interface ExternoRepositorio extends CrudRepository<ExternoModelo, String>{
    
}
