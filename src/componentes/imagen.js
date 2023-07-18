import React from 'react';

const Imagen = (props) =>{

    //const {imgUrl,name,binomialName,price,wateringsPerWeek,fertilizerType,heightInCm} = props.imagen;
    const {largeImageURL,likes,previewURL,tags,views} = props.imagen;
    //<img src={imgUrl} alt={name} className="card-img-top"></img>
/*<p className='card-text'>{name}</p>
                    <p className='card-text'>{price}</p>*/
    return(
        <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-img-top"></img>
                <div className="card-body">
                    

                    <a href={largeImageURL} target='_blank' className='btn btn-primary btn-block'>Ver Imagen</a>
                </div>

            </div>
        </div>
    )
}

export default Imagen;