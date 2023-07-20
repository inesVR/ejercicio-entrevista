import React, { Component } from 'react';

class Buscador extends Component{

    busquedaRef = React.createRef();

    getDatos = (e) => {
        e.preventDefault();
        
        //tomamos valor de input
        console.log(this.busquedaRef.current.value);
        
        //se envia al componente principal
        this.props.datosDeBusqueda(this.busquedaRef.current.value);
    }

    render(){
        return(
            <form onSubmit={this.getDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg"/>

                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-secondary" value="Buscar"/>

                    </div>

                </div>
            </form>
        )
    }
}


export default Buscador;