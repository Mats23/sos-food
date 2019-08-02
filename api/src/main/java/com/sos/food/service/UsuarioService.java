package com.sos.food.service;


import com.sos.food.dto.UsuarioDTO;
import com.sos.food.entity.Usuario;
import com.sos.food.mapper.UsuarioMapper;
import com.sos.food.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;


    public HttpStatus add(UsuarioDTO usuarioDTO) throws NoSuchAlgorithmException {

        try {
            MessageDigest md5 = MessageDigest.getInstance("MD5");
            md5.update(usuarioDTO.getPassword().getBytes(), 0, usuarioDTO.getPassword().length());
            byte[] hash = md5.digest();
            usuarioDTO.setPassword(DatatypeConverter.printHexBinary(hash).toUpperCase());
        } catch (Exception e) {
            throw e;
        }
        if(findByEmail(usuarioDTO.getEmail()).isPresent()) {
            return HttpStatus.ALREADY_REPORTED;
        }
        Optional<Usuario> saved = Optional.of(usuarioRepository.save(UsuarioMapper.dtoToEntity(usuarioDTO)));
        return saved.isPresent()?HttpStatus.CREATED:HttpStatus.BAD_REQUEST;
    }

    public Optional<Usuario> findByEmail(String email) {
        return Optional.ofNullable(this.usuarioRepository.findByEmail(email));
    }
    public List<Usuario> findAll() {
        return this.usuarioRepository.findAll();
    }
}
