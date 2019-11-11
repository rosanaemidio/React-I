import React from 'react';

const DetalhesAutor = props => {
    return(
    <div >
         <h2 className="comentario__nome">{props.titulo}</h2>
         <h3 className="comentario__subtitulo">{props.subtitulo}</h3>
    </div>
    )
   
   }

 export default DetalhesAutor;