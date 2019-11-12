import React from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends React.Component{

  
}


function App() {
  return (
    <div className="App">
          <h1>Contador: </h1>
  <p>{Contador}</p>
      {verificaContador()}
      <button className="BtnSoma">+1</button>
      <button className="BtnSubtrai">-1</button>
      <button className="LimpaTudo">Resetar</button>

    
    </div>
  );
}

export default App;
