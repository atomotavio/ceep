import React from 'react';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';

class App extends Component {
  render() {
    return (
      <>
        <FormularioCadastro />
        <ListaDeNotas />
      </>
    );
  }
  
}

export default App;
