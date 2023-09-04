package br.com.api.publico.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "publico_externo")
@Getter
@Setter
public class ExternoModelo {

    @Id
    private String rg; //obrigatorio
    private String nome;
    private String cpf;
    private String foto; //url da foto da pessoa
    private String fotoDoc; //url da foto do doc da
    private String sexo;
    private String origem; //escola, empresa, etc
    private String ativo; //pode entrar ou n
    private String observacao;
    private String endereco;
    private String fone1;
    private String fone2;
    private String email;
    private String data;
    private String outroDoc; //caso n tenha identidade/cnh
    private String portaria;

}
