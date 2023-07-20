import React, { Component } from 'react';
import Imagen from './imagen';
import Pagina from './Pagina';
import Producto from './Producto';


class Resultados extends Component{
    state = {
        productoSelec: null,
    };


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
                            verDetallesProd ={this.verDetallesProd}
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
    verDetallesProd = (producto) => {
        this.setState({
            productoSelec: producto,
        }, () => {
            // Desplázate hacia el elemento con los detalles del producto
            if (this.props.setDetallesProd) {
              this.props.setDetallesProd(this.productDetailRef);
              this.productDetailRef.scrollIntoView({ behavior: 'instant',block :'end' });
            }
        });
        /*const url = `/product/${producto.id}`;
        const newWindow = window.open(url, '_blank');
        newWindow.focus();*/
    }
    


    render(){
        const { productoSelec } = this.state;
        return(
            <React.Fragment>
                { this.mostrarImagenes() }
                {/*productoSelec && (
                    <Producto producto={productoSelec} onClose={() => this.setState({ productoSelec: null })} />
                )*/}
                <div ref={(ref) => this.productDetailRef = ref}>
                    {/* Mostrar los detalles del producto aquí */}
                    {this.state.productoSelec && (
                        <div className="product-detail">
                            {productoSelec && (
                                <Producto producto={productoSelec} onClose={() => this.setState({ productoSelec: null })} />
                            )}
                        {/* Detalles del producto 
                        <button onClick={() => this.setState({ productoSelec: null })} className="close-button btn btn-primary btn-block">Cerrar</button>
                        <img src={this.state.productoSelec.largeImageURL} alt={this.state.productoSelec.tags} className="product-img" />
                        <p>Likes: {this.state.productoSelec.likes}</p>
                        {/* Aquí puedes agregar más información del producto si lo deseas */}
                        </div>
                    )}
                </div>

            </React.Fragment>
        );
    }
}

export default Resultados;