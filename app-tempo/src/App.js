import React from 'react';
import Previsao from './componentes/previsao/Previsao';
import Comentarios from './componentes/comentarios/Comentarios'
import css from '../src/App.css'


class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className='container'>   
        <Previsao />
        <Comentarios />
      </div>
    )
  }
}

export default App;
