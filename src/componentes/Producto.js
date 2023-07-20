import React, {Component,useRef} from 'react';

/*const Producto = (props) => {
    const {likes,previewURL,tags,views} = props.imagen;

    return(
        
        <div>
            <header>
                <a href="/">
                    <span>Dulces Petalos</span>
                </a>
            </header>
        
            <div className="col-12 col-md-4 col-lg-3 mb-4">

                <div className="col-6">
                    <img src={previewURL} className="card-img-left"></img>
                <div className="col-12">
                        <p className='card-text'>Likes: {likes}</p>
                        <p className='card-text'>Tags: {tags}</p>
                        <p className='card-text'>Views: {views}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Producto;*/
const Producto = ({ producto, onClose }) => {
    const productDetailRef = React.createRef();
    if (!producto) {
      return null;
    }
  
    const cerrarDetalles = () => {
        // Desplazarse hacia la sección que contiene los detalles del producto
        productDetailRef.current.scrollIntoView({ behavior: 'instant'});
        onClose();
    }

    return (
      <div className="product-detail" ref={productDetailRef}>
        <button onClick={cerrarDetalles} className="close-button btn btn-danger btn-block">Cerrar</button>
        <div className="row">
        <div className="col-md-6">
            <img src={producto.largeImageURL} alt={producto.tags} className="product-img img-fluid" />

        </div>
        <div className="col-md-6">
            <p>Likes: {producto.likes}</p>
            <p >Tags: {producto.tags}</p>
            <p >Views: {producto.views}</p>
        </div>
            
        </div>
        
        {/* Aquí puedes agregar más información del producto si lo deseas */}
      </div>
    );
  };
  
  export default Producto;
