import React from 'react';
import DetalhesAutor from './DetalhesAutor';
import ComentarioTexto from './ComentarioTexto';




const ComentarioDetalhes = props =>{
  return (
      <hr/>  
  )

}

const Comentario = (props) =>{
  return (
    <div className="comentario">

      <img src= {props.img} className="comentario__perfil"/>
      <div >
          <DetalhesAutor 
            titulo={props.titulo}
            subtitulo={props.subtitulo}
          />
          <ComentarioDetalhes     
          />
          <ComentarioTexto 
              coments={props.coments}
          />
      </div>
    </div>

  );

} 
export default Comentario;