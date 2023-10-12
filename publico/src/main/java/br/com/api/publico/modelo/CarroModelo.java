package br.com.api.publico.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "carros")
@Getter
@Setter
public class CarroModelo {
    @Id
    // Informações de Identificação do Veículo
    private String vin; //Número de identificação do veículo 
    private String marca;
    private String modelo;
    private int anoFabricacao;
    private String numeroChassi;
    private String corVeiculo;

    // Informações do Proprietário
    private String nomeProprietario;
    private String enderecoProprietario;
    private String telefoneProprietario;
    private String idProprietario;

    // Informações Legais e de Registro
    private String numeroPlaca;
    private String dataRegistro;
    private String dataVencimentoRegistro;
    private String documentoRegistro;

    

    // Outras Informações
    private String equipamentosAdicionais;
}




