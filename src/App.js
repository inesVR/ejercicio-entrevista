//import './App.css';
import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultados from './componentes/Resultados';
//import axios from 'axios';

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
    imagenes : [],
    pagina : '',
    detallesProd : ''
  }

 

  paginaAnt = () => {
    //leer el estado de la pagina en la que estoy
    let pagina = this.state.pagina;

    //resto uno al numero de la pagina en la que estoy, excepto en la 1
    if(pagina == 1)
      return null;
    pagina -=1;

    //añadir cambio al estado
    this.setState({
      pagina
    },() => {
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSig = () => {
    //leer el estado de la pagina en la que estoy
    let pagina = this.state.pagina;

    //suma uno al numero de la pagina en la que estoy
    pagina +=1;

    //añadir cambio al estado
    this.setState({
      pagina
    },() => {
      this.consultarApi();
      this.scroll();
    });

  }

  consultarApi = () => {
    const termino = this.state.termino
    const pagina = this.state.pagina;
    const url = 'https://dulces-petalos.herokuapp.com/api/product';
    //const url = `https://pixabay.com/api/?key=38332260-5c20c88c63584aee6d369701c&q=${this.state.termino}&page=${pagina}`;
    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json() )
      .then(resultado => this.setState({ imagenes : resultado.hits }) )
      
    }

  datosDeBusqueda = (termino) => {
    //console.log(termino);
    this.setState({
      termino : termino,
      pagina : 1
    }, () =>{
      this.consultarApi();

    })
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('instant','start')
  }

  

  verDetallesProd = (producto) => {
    this.setState({
      detallesProd: producto
    })
  }

  render(){
    return (
      <div className="App container">
        <header>
        <a href="/">
          <span>Dulces Petalos</span>
        </a>
      </header>
        <div className="jumbotron">
          <p className="lead text-center">
            <Buscador
              datosDeBusqueda={this.datosDeBusqueda}
            />
          </p>
            
        </div>
        
       

        <div className="row justify-content-center">
          <Resultados 
            imagenes = {this.state.imagenes}
            paginaAnt={this.paginaAnt}
            paginaSig={this.paginaSig}
            verDetallesProd={this.verDetallesProd}
            setDetallesProd={(ref) => this.setState({ detallesProd: ref })}

          />
        </div>
      </div>
    );
  }
  
}
export default App;
