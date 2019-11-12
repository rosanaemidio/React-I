import React from 'react';
import logo from './logo.svg';
import './App.css';

class Contador extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      contador:0
    };
  }

  adicionaUm =() => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  removeUm = () => {
    this.setState((prevState)=>{
      return{
        contador: prevState.contador - 1
      }
    })
  }

  render(){
    return (
      <div>
          <p>{this.state.contador}</p>
           <button className="BtnSoma" onClick={this.adicionarUm}>+1</button>
           <button className="BtnSubtrai" onClick={this.removeUm}>-1</button>
            <button className="LimpaTudo">Resetar</button>

      </div>


    )



  }
}


function App() {
  return (
    <div className="App">
          <h2>Contador</h2>
    <Contador />  
    </div>
  );
}

export default App;
