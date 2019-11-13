import React from 'react';
import BotaoAlternar from './BotaoAlternar';
import BotaoContador from './BotaoContador';
import BotaoFinalizar from './BotaoFinalizar';

class Contador extends React.Component{
    constructor (props) {
      super(props);
      this.state = {
        contadore:0,
        visibilidade :true,
        congelado: false
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
      resetar = () => {
        this.setState(() => {
          return {
            contador: 0,
            congelado: false
          }
        })
      }
    
      finalizar = () =>{
        this.setState((estadoAnterior)=>{
          return{
    
            congelado: !estadoAnterior.congelado
          }
        })
      }
    
      alternarVisibilidade = () => {
        this.setState((estadoAnterior) => {
          return {
            //toggle
            visibilidade: !estadoAnterior.visibilidade
          }
        })
      }
      render(){
        return (
          <div>
              <p>{this.state.contador}</p>
                <BotaoAlternar 
                    onClickMetodo = {this.alternarVisibilidade}
                    visibilidade = {this.state.visibilidade}
                />
              {this.state.visibilidade && (
                <BotaoContador 
                    disabled={this.state.congelado}
                    cliqueAddUm={this.adicionarUm}
                    cliqueSubUm={this.subtrairUm}
                    cliqueResetar={this.resetar}    
                />
              )}
    
              {this.state.contador !== 0 && (
               <BotaoFinalizar 
               
                cliqueCongelar={this.congelarContador}
               />
              )}
    
          </div>
    
    
        )
    
    
    
      }

}
export default Contador;