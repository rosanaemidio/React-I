import React from 'react';
import previsoes from '../../dados/previsoes'


class Previsao extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
            <div className="previsao"> 
                {previsoes.map((previsao)=>(
                    <div>
                        <h2 className="previsao__data">{previsao.data}</h2>
                        <p className="previsao__resumo">{previsao.resumo}</p>
                        <img src={previsao.imagem} className="previsao__img" />
                
                        <table className="previsao-temperatura">
                        <tr className="previsao-temperatura__linha">
                            <td>Máxima</td>
                            <td>{previsao.temperatura.max} oC</td>
                        </tr>
                        <tr className="previsao-temperatura__linha">
                            <td>Mínimo</td>
                            <td>{previsao.temperatura.min} oC</td>
                        </tr>
                        </table>
                    </div>


                ))
            }       
      
          </div>
        

        )
    }
}
export default Previsao