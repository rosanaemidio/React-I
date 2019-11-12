import React from 'react';
import Solzin from './img/sol.png';
import Nuvenzin from './img/nuvens.png';
import CriaCards from './componentes/CriaCards'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="previsao-container">
          <CriaCards
            data = "25/08/2020"
            resumo = "Ensolarado"
            img = {Solzin}
            temperatura ={{
              max : 32,
              min : 21
            }}       
          />
          <CriaCards
            data="01/06/2019"
            resumo="Nublado"
            img={Nuvenzin}
            temperatura={{
              max: 25,
              min: 18
            }}
          />     
    </div>
  );
}

export default App;
