package br.com.api.publico.modelo;
//quando der erro, eh responsavel por retornar a mensagem

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component //spring cria o objeto(injecao de dependencia)
@Getter
@Setter
public class RespostaModelo {
    
    private String mensagem;
}
