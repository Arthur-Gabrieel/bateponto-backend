package com.caminhao.bateponto.repository;

import com.caminhao.bateponto.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
   Optional<Usuario> findByNomeAndEmailAndSenha(String nome, String email, String senha);
}