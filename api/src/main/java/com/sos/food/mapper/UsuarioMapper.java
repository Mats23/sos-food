package com.sos.food.mapper;

import com.sos.food.dto.UsuarioDTO;
import com.sos.food.entity.Usuario;

import java.security.MessageDigest;
import java.time.LocalDate;

public class UsuarioMapper {



    public static Usuario dtoToEntity(UsuarioDTO usuarioDTO)  {
        return Usuario.builder()
                .name(usuarioDTO.getName())
                .email(usuarioDTO.getEmail())
                .password(usuarioDTO.getPassword())
                .createdOn(LocalDate.now())
                .build();
    }
}

