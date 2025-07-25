package com.caminhao.bateponto.repository;

import com.caminhao.bateponto.model.Mensagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MensagemRepository extends JpaRepository<Mensagem, Long> {
    // aqui você pode colocar métodos personalizados, se quiser
}
