package com.example.backend.service.imp;

import com.example.backend.dto.CelularRequest;
import com.example.backend.model.Celular;
import com.example.backend.repository.ICelularRepository;
import com.example.backend.service.ICelularService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceCelular implements ICelularService {

    @Autowired
    private ICelularRepository celularRepository;

    @Override
    public Celular createCelular(CelularRequest celularRequest) {
        Celular celular = new Celular();
        celular.setMarca(celularRequest.getMarca());
        celular.setSerial(celularRequest.getSerial());
        celular.setFechaCompra(celularRequest.getFechaCompra());
        celular.setAnioLanzamiento(celularRequest.getAnioLanzamiento());
        celular.setPrecio(celularRequest.getPrecio());
        celular.setSistemaOperativo(celularRequest.getSistemaOperativo());
        celular.setGama(celularRequest.getGama());
        return celularRepository.save(celular);
    }

    @Override
    public Celular updateCelular(Long id, CelularRequest celularRequest) {
        Optional<Celular> optionalCelular = celularRepository.findById(id);
        if (optionalCelular.isPresent()) {
            Celular celular = optionalCelular.get();
            celular.setMarca(celularRequest.getMarca());
            celular.setSerial(celularRequest.getSerial());
            celular.setFechaCompra(celularRequest.getFechaCompra());
            celular.setAnioLanzamiento(celularRequest.getAnioLanzamiento());
            celular.setPrecio(celularRequest.getPrecio());
            celular.setSistemaOperativo(celularRequest.getSistemaOperativo());
            celular.setGama(celularRequest.getGama());
            return celularRepository.save(celular);
        }
        return null;
    }

    @Override
    public List<Celular> getAllCelulares() {
        return celularRepository.findAll();
    }

    @Override
    public Celular getCelularById(Long id) {
        return celularRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteCelular(Long id) {
        celularRepository.deleteById(id);
    }
}
