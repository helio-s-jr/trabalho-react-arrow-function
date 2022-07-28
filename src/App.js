import React, {Component} from "react";

export default class App extends Component{
  
  ARROWFUNCTION: () => {}

  mensagem = () => {
    return <h2>Passando mensagem pela função</h2>
  }

  temosMensagem = (msg) =>{
    return <h2>{msg}</h2>
  }

  dobro = (numero) =>{
    return <h2>O dobro do número: {numero*2}</h2>
  }

  numero = (num) => {
    if(num >= 0){
      return <h3>Número positivo</h3>
    }else{
      return <h3>Número negativo</h3>
    }
  }
}