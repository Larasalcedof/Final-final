package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import java.time.LocalDate;

@Data
@Entity
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//@Builder
@Table(name = "celulares")
@SQLDelete(sql = "UPDATE celulares SET deleted = true WHERE id = ?")
@Where(clause = "deleted = false")
public class Celular {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String serial;
    private LocalDate fechaCompra;
    private int anioLanzamiento;
    private double precio;
    private String sistemaOperativo;
    private String gama;
    private boolean deleted = Boolean.FALSE;
}

