package com.example.backend.repository;

import com.example.backend.model.Celular;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICelularRepository extends JpaRepository<Celular, Long> {
}

