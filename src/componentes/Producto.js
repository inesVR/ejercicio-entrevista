import React, {Component} from 'react';

const Producto = (props) => {
    const {likes,previewURL,tags,views} = props.imagen;

    return(
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
    )
}
