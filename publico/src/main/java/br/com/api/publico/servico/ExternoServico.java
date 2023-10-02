package br.com.api.publico.servico;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

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

    //metodo para ordenar os visitantes pela data 
    public Iterable<ExternoModelo> listarPorData() {
        Iterable<ExternoModelo> todosRegistros = listar();
        List<ExternoModelo> registrosOrdenados = new ArrayList<>();
        todosRegistros.forEach(registrosOrdenados::add);
        registrosOrdenados.sort(Comparator.comparing(ExternoModelo::getData).reversed());

        return registrosOrdenados;
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

        else if(em.getSituacao().equals("")) {
            rm.setMensagem("selecione a situação do visitante");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getData().equals("")) {
            rm.setMensagem("a data é obrigatória");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getEndereco().equals("")) {
            rm.setMensagem("o endereço é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getFone1().equals("") && em.getFone2().equals("")) {
            rm.setMensagem("preencha ao menos um número de telefone");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getNome().equals("")) {
            rm.setMensagem("o nome é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }
        else if(em.getNome().length() < 3) {
            rm.setMensagem("o nome deve ter ao menos 3 caracteres");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if (em.getCpf() != "" && em.getCpf().length() != 11 ) {
            rm.setMensagem("o cpf deve conter 11 caracteres");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getPortaria().equals("")) {
            rm.setMensagem("selecione uma portaria");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

        else if(em.getSexo().equals("")) {
            rm.setMensagem("selecione o sexo do visitante");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }

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