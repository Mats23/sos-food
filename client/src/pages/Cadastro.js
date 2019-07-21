import React from 'react';
import InputCustomizado from '../component/InputCustomizado';
import Button from '../component/Button';

function Cadastro() {
    return (
      <div>
        <h2>Sobre o dono do restaurante:</h2>
        <InputCustomizado id="email" label="E-mail" type="email" name="email" placeholder="nomesobrenome@teste.com"/>
        <InputCustomizado id="celular" label="Celular (com DDD)" type="type" name="celular" placeholder="(71) 9 9999-9999"/>
        <InputCustomizado id="nome" label="Nome" type="type" name="nome" placeholder="nome"/>
        <InputCustomizado id="sobrenome" label="Sobrenome" type="type" name="sobrenome" placeholder="sobrenome"/>
        <InputCustomizado id="cpf" label="CPF" type="type" name="cpf" placeholder="XXX.XXX.XXX-XX"/>
        <InputCustomizado id="rg" label="RG" type="type" name="rg" placeholder=""/>
        <Button href="#" button="Continuar"/>
      </div>
    );
  }
  
  export default Cadastro;
  
