package com.sos.food.controller;

import com.sos.food.dto.UsuarioDTO;
import com.sos.food.entity.Usuario;
import com.sos.food.service.UsuarioService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UsuarioController {

    private  static final Logger LOGGER = LoggerFactory.getLogger(UsuarioController.class);


    @Autowired
    UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<HttpStatus> save(@RequestBody UsuarioDTO usuarioDTO)  {
        try {
            return ResponseEntity.ok().body(usuarioService.add(usuarioDTO));
        } catch (Exception e) {
            LOGGER.error(e.getMessage(),e);
        }
        return ResponseEntity.badRequest().body(HttpStatus.BAD_REQUEST);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> getAll() {
        try {
            return ResponseEntity.ok().body(this.usuarioService.findAll());
        } catch (Exception e) {
            LOGGER.error(e.getMessage(), e);
        }
        return ResponseEntity.badRequest().build();
    }
}
