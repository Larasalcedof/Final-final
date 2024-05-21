package com.example.backend.service;


import com.example.backend.dto.CelularRequest;
import com.example.backend.model.Celular;

import java.util.List;

public interface ICelularService {
    Celular createCelular(CelularRequest celularRequest);
    Celular updateCelular(Long id, CelularRequest celularRequest);
    List<Celular> getAllCelulares();
    Celular getCelularById(Long id);
    void deleteCelular(Long id);
}
