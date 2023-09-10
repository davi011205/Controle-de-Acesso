package br.com.api.publico.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.publico.modelo.ExternoModelo;
import br.com.api.publico.modelo.RespostaModelo;
import br.com.api.publico.repositorio.ExternoRepositorio;

@Service
public class ExternoServico {
    
    @Autowired 
    private ExternoRepositorio er;

    @Autowired
    private RespostaModelo rm;


    //metodo para listar todos os visitantes externos
    public Iterable<ExternoModelo> listar() {
        return er.findAll();
    }

    //metodo para cadastrar ou alterar visitantes
    public ResponseEntity<?> cadastrarAlterar(ExternoModelo em, String acao) {
        if(em.getRg().equals("")) {
            rm.setMensagem("o rg é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } 
        else if (em.getRg().length() != 11 ) {
            rm.setMensagem("o rg deve conter 11 caracteres");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        // else if(em.getAtivo().equals("")) {
        //     rm.setMensagem("o campo 'ativo' é obrigatório");
        //     return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        // }
        // else if(em.getData().equals("")) {
        //     rm.setMensagem("a data é obrigatória");
        //     return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        // }
        else if(em.getEndereco().equals("")) {
            rm.setMensagem("o endereço é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getFone1().equals("") && em.getFone2().equals("")) {
            rm.setMensagem("preencha ao menos um número de telefone");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        // else if (em.getFone1().length() != 9 || em.getFone2().length() != 9 ) {
        //     rm.setMensagem("o telefone deve conter 9 caracteres");
        //     return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        // }
        else if(em.getNome().equals("")) {
            rm.setMensagem("o nome é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if (em.getCpf().length() != 11 ) {
            rm.setMensagem("o cpf deve conter 11 caracteres");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        // else if(em.getPortaria().equals("")) {
        //     rm.setMensagem("preencha o campo 'portaria");
        //     return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        // }

        else {
            if(acao.equals("cadastrar")) {
                return new ResponseEntity<ExternoModelo>(er.save(em), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<ExternoModelo>(er.save(em), HttpStatus.OK);
            }
        }
    }

    //metodo para remover visitante
    public ResponseEntity<RespostaModelo> remover(String rg) {
        er.deleteById(rg);

        rm.setMensagem("O visitante foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }
}
