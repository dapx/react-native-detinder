import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import Nav from '../nav/index';

import { Button, Icon, FormLabel, FormInput, CheckBox } from 'react-native-elements'

const char = {
  tatuagem: false,
  adornos: false
}

export default class Form extends Component {

  constructor(props){
  super(props);
  this.state = {
      tatuagem: char.tatuagem,
      adornos: char.adornos,
    };
  }

  sendToServer(char) {
    console.log("Criado caracteristicas")
  }


  render() {
    return (
      <View>
      <FormLabel>CPF:</FormLabel>
      <FormInput onChangeText={() => console.log("Valida CPF - setState CPF true")}/>
      <FormLabel>Nome:</FormLabel>
      <FormInput onChangeText={() => console.log("Valida nome - setState NOME true")}/>
      <FormLabel>Celular:</FormLabel>
      <FormInput onChangeText={() => console.log("Valida celular - setState CELULAR true")}/>
      <Button
        raised
        icon={{name: 'done-all'}}
        title='Finalizar'
        onPress={() => { this.props.navigator.push(this.props.routes[2]) }}
      />
      </View>
    )
  }
}
