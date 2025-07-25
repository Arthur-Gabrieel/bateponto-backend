package com.caminhao.bateponto;

import com.caminhao.bateponto.model.Usuario;
import com.caminhao.bateponto.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @PostMapping
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findByNomeAndEmailAndSenha(
            usuario.getNome(), usuario.getEmail(), usuario.getSenha());

        if (usuarioEncontrado.isPresent()) {
            return ResponseEntity.ok(usuarioEncontrado.get());
        } else {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos");
        }
    }
}


