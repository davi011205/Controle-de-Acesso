package br.com.api.publico.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.publico.modelo.ExternoModelo;
import br.com.api.publico.servico.ExternoServico;

@RestController
public class ExternoControle {
     
    @Autowired //injecao de pf pra criar o obj type servico
    private ExternoServico es; 

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ExternoModelo em) {
        return es.cadastrarAlterar(em, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable <ExternoModelo> listar() {
        return es.listar();
    }

}
