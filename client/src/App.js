import React from 'react';
import './sass/App.scss';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>SoS food</strong></h1>
        <Button href="/cadastro" button="Cadastrar Restaurante"/>
      </header>  
    </div>
  );
}

export default App;
