import React, { Component } from 'react';
import Imagen from './imagen';
import Pagina from './Pagina';


class Resultados extends Component{
    mostrarImagenes = () => {
        const imagenes = this.props.imagenes;

        if(imagenes.length ===0) return null;

        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>(
                        <Imagen
                            key = {imagen.id}
                            imagen ={imagen}
                        />
                    ) )}
                </div>
                <Pagina 
                    paginaAnt={this.props.paginaAnt}
                    paginaSig={this.props.paginaSig}
                />
            </React.Fragment>
        );

    }


    render(){
        return(
            <React.Fragment>
                { this.mostrarImagenes() }
            </React.Fragment>
        );
    }
}

export default Resultados;