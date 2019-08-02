package com.sos.food.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UsuarioDTO {

    private String name;
    private String password;
    private String email;
    private LocalDate createdOn;
    private LocalDate lastLogin;


}
