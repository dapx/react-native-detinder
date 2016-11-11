import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Slider,
  Navigator
} from 'react-native';

import Nav from '../nav/index';
import Perguntas from '../caracteristicas/perguntas';

const char = {
  tatuagem: false,
  adornos: false,
  altura: 1
}

export default class Form extends Component {

  constructor(props){
  super(props);
  this.state = {
      tatuagem: char.tatuagem,
      adornos: char.adornos,
      altura: char.altura,
    };
  }

  sendToServer(char) {
    console.log("Criado caracteristicas")
  }

  render() {
    return (
      <Perguntas navigator={this.props.navigator} routes={this.props.routes}/>
    );
  }
}
