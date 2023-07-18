import React from 'react';

const Imagen = (props) =>{

    const {imgUrl,name,binomialName,price,wateringsPerWeek,fertilizerType,heightInCm} = props.imagen;

    return(
        <div className="col-12 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={imgUrl} alt={name} className="card-img-top"></img>
                <div className="card-body">
                    <p className='card-text'>{name}</p>
                    <p className='card-text'>{price}</p>

                    <a href={imgUrl} target='_blank' className='btn btn-primary btn-block'>Ver Imagen</a>
                </div>

            </div>
        </div>
    )
}

export default Imagen;