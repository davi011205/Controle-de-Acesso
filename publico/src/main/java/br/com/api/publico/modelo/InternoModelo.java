package br.com.api.publico.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "publico_interno")
@Getter
@Setter
public class InternoModelo {
    @Id
    private String rg;
    private String carteirinha;
    private String nome;
}