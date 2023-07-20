import React from 'react';

const Imagen = (props) => {

    //const {imgUrl,name,binomialName,price,wateringsPerWeek,fertilizerType,heightInCm} = props.imagen;
    //const {largeImageURL,likes,previewURL,tags,views,id} = props.imagen;
    //<img src={imgUrl} alt={name} className="card-img-top"></img>
/*<p className='card-text'>{name}</p>
                    <p className='card-text'>{price}</p>*/
    const { likes, previewURL, tags, id } = props.imagen;


    return (
        <div className="col-12 col-md-4 col-lg-3 mb-4">
        <div className="card">
            <img src={previewURL} alt={tags} className="card-img-top" />
            <div className="card-body">
            <p className="card-text">Likes: {likes}</p>
    
            {/* Llamar a la función verDetallesProd cuando el usuario haga clic en el botón */}
            <button onClick={() => props.verDetallesProd(props.imagen)} className="btn btn-primary btn-block">
            Ver Imagen
            </button> 
            </div>
        </div>
        </div>
    );
};
    
export default Imagen;