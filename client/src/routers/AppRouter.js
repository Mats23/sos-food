import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App'
import Cadastro from '../Cadastro'
 
const AppRouter = () => (
    <BrowserRouter>

            <Switch>
                <Route path="/" component={App} exact={true}/>
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/lista-restaurantes" />
            </Switch>

    </BrowserRouter>
);
 
export default AppRouter