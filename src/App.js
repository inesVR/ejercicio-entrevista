//import './App.css';
import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultados from './componentes/Resultados';


/*function App() {
  return (
    <div className="App container">
      <div className="jumbotron">
        <p className="lead text-center">Header</p>
        <Buscador/>
      </div>
    </div>
  );
}*/
class App extends Component {

  state = {
    termino: '',
    imagenes : []
  }

  consultarApi = () => {
    const termino = this.state.termino
    const url = 'https://dulces-petalos.herokuapp.com/?key=algo${termino}&per_page=20';
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({ imagenes : resultado.hits }) )
  }

  datosDeBusqueda = (termino) => {
    //console.log(termino);
    this.setState({
      termino
    }, () =>{
      this.consultarApi();
    })
  }


  render(){
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Header</p>
        </div>
        <div className="jumbotron">
          <p className="lead text-center"></p>
          <Buscador
            datosDeBusqueda={this.datosDeBusqueda}
          />
        </div>
        <Resultados 
          imagenes = {this.state.imagenes}
        />
      </div>
    );
  }
  
}
export default App;
