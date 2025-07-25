package com.caminhao.bateponto;


import com.caminhao.bateponto.model.Mensagem;
import com.caminhao.bateponto.repository.MensagemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mensagens")  //@RequestMapping — define o caminho base para todas as rotas dentro desse controller
public class MensagemController {

    @Autowired
    private MensagemRepository mensagemRepository;

    @GetMapping
    public List<Mensagem> listarMensagems(){    //listarMensagens() — responde a GET /mensagens, trazendo todas as mensagens do banco
        return mensagemRepository.findAll();
    }

    @PostMapping
    public Mensagem criarmMensagem(@RequestBody Mensagem mensagem) {    //criarMensagem() — responde a POST /mensagens, recebe um JSON com a mensagem e salva no banco
        return mensagemRepository.save(mensagem);
    }
    
    
}
