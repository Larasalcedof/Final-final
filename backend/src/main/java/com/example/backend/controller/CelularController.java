package com.example.backend.controller;

import com.example.backend.dto.CelularRequest;
import com.example.backend.model.Celular;
import com.example.backend.service.ICelularService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/celulares")
public class CelularController {

    @Autowired
    private ICelularService celularService;

    @PostMapping
    public ResponseEntity<Celular> createCelular(@RequestBody CelularRequest celularRequest) {
        Celular celular = celularService.createCelular(celularRequest);
        return ResponseEntity.ok(celular);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Celular> updateCelular(@PathVariable Long id, @RequestBody CelularRequest celularRequest) {
        Celular celular = celularService.updateCelular(id, celularRequest);
        return ResponseEntity.ok(celular);
    }

    @GetMapping
    public ResponseEntity<List<Celular>> getAllCelulares() {
        List<Celular> celulares = celularService.getAllCelulares();
        return ResponseEntity.ok(celulares);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Celular> getCelularById(@PathVariable Long id) {
        Celular celular = celularService.getCelularById(id);
        return ResponseEntity.ok(celular);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCelular(@PathVariable Long id) {
        celularService.deleteCelular(id);
        return ResponseEntity.noContent().build();
    }
}
