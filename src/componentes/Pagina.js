import React from 'react';

const Pagina = props => {
    <div className='py-3'>
        <button onClick={props.paginaAnt} type='button' className=' btn btn-info mr-1'>Ant &larr;</button>
        <button onClick={props.paginaSig} type='button' className=' btn btn-info'>Sig &rarr;</button>

    </div>
}

export default Pagina;