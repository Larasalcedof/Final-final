package com.example.backend.dto;

import lombok.Data;
import java.time.LocalDate;

@Data
public class CelularResponse {
    private Long id;
    private String marca;
    private String serial;
    private LocalDate fechaCompra;
    private int anioLanzamiento;
    private double precio;
    private String sistemaOperativo;
    private String gama;
}

