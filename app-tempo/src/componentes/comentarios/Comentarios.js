import React from 'react';
import comentarios from '../../dados/comentarios'

class Comentarios extends React.Component{
    constructor(props){
        super(props)
    }
        render(){
                return(
                 <div className="comentarios">
                     {comentarios.map((comentario)=>(
                         <div className="comentario">
                            <img src= {comentario.autora.imagem} className="comentario__perfil"/>
                            <div>
                            <h2 className="comentario__nome">{comentario.autora.nome}</h2>
                            <h3 className="comentario__subtitulo">{comentario.subtitulo}</h3>
                            <hr/>
                            <p>{comentario.texto}</p> 
                            </div>
                         </div>




                        ))

                     }
                </div>

            )

        }
}
export default Comentarios