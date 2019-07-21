import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EsqueceuSenha from "../pages/EsqueceuSenha";
import Acesso from "../pages/Acesso";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/acesso" component={Acesso} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/esqueceu-senha" component={EsqueceuSenha} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
