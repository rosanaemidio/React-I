import React from 'react';
import Solzin from './img/sol.png';
import Nuvenzin from './img/nuvens.png';
import logo from './logo.svg';
import './App.css';

const CriaCards = props => {
    return (
      <div className="previsao">
        <h3 className="previsao-data">{props.data}</h3>
        <p className="previsao-resumo">{props.resumo}</p>
          <img className="previsao__img" src={props.img}/>
        <table>
          <tr className="previsao-temperatura">
            <td className="previsao-temperatura__linha">Máxima</td>
            <td className="previsao-temperatura__linha">{props.max} C</td>
          </tr>
          <tr className="previsao-temperatura">
            <td className="previsao-temperatura__linha">Mínima</td>
            <td className="previsao-temperatura__linha">{props.min} C</td>
          </tr>
        </table>
      </div>
    )

}

function App() {
  return (
    <div className="previsao-container">
      <div className="previsao">
        <CriaCards
          data = "25/08/2020"
          resumo = "Ensolarado"
          img = {Solzin}
          max = {32}
          min = {21}

        
        />


      </div>
      
    </div>
  );
}

export default App;
