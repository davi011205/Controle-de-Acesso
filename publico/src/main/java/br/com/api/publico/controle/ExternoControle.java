package br.com.api.publico.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.publico.modelo.ExternoModelo;
import br.com.api.publico.modelo.RespostaModelo;
import br.com.api.publico.servico.ExternoServico;

@RestController
@CrossOrigin(origins = "*")
public class ExternoControle {
     
    @Autowired //injecao de pf pra criar o obj type servico
    private ExternoServico es; 

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody ExternoModelo em) {
        return es.cadastrarAlterar(em, "cadastrar");
    }

    @PutMapping("/alterar")
     public ResponseEntity<?> alterar(@RequestBody ExternoModelo em) {
        return es.cadastrarAlterar(em, "alterar");
    }

    @GetMapping("/listar")
    public Iterable <ExternoModelo> listar() {
        return es.listar();
    }

    @DeleteMapping("/remover/{rg}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable String rg) {
        return es.remover(rg);
    }

}