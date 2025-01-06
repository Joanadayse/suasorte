import React, {Component} from "react";
import './estilo.css'


class App extends Component{
constructor(props){
  super(props);
  this.state={
    textoFrase:''
  };

  this.quebraBiscoito=this.quebraBiscoito.bind(this);

  
        this.frases = [
          "Você é a parte boa do dia,sempre iluminando tudo ao seu redor.",
          "Cada sorriso seu é como um raio de sol no meu coração.",
          "Só de pensar em você, meu coração já se aquece de felicidade,OBRIGADA POR EXISTIR",
          "Seus abraços têm o poder mágico de curar qualquer dia difícil.",
          "É impossível estar perto de você sem sentir que o mundo é um lugar mais bonito.",
          "Você é a razão pela qual acredito no amor, sua existencia é quem faz isso",
          "Quando você está aqui, até os dias nublados ficam cheios de luz.",
          "Eu te admiro de uma forma que nem todas as palavras do mundo podem explicar.",
        ];
}

quebraBiscoito(){
  let state = this.state;
  let numeroAleatorio= Math.floor(Math.random() * this.frases.length);
  state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
  this.setState(state);

}


  render(){
    return (
      <div className="container">
        <h1 className="textoFrase">Love Fortune Cookie</h1>
        <img src={require("./acessts/biscoito-da-sorte.jpg")} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}


class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
