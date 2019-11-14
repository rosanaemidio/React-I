import React from'react';

class Contador extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
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