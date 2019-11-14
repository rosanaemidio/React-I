import React from 'react';
import Titulo from 'react';



export default function CriaCards(props) {
  return (
    <div className="previsao">
      <Titulo
      data = "25/08/2020"
      resumo = "Ensolarado"

      />

      <img src={props.img} className="previsao__img" />

      <table className="previsao-temperatura">
        <tr className="previsao-temperatura__linha">
          <td>Máxima</td>
          <td>{props.temperatura.max} oC</td>
        </tr>
        <tr className="previsao-temperatura__linha">
          <td>Mínimo</td>
          <td>{props.temperatura.min} oC</td>
        </tr>
      </table>

    </div>
  )
}