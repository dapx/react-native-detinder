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

export default class Form extends Component {

  constructor(props){
    super(props);
  }

  sendToServer(char) {
    console.log("Criado caracteristicas")
  }

  render() {
    return (
      <View>
      <FormLabel>Numero SADE:</FormLabel>
      <FormInput onChangeText={() => console.log("Valida SADE - setState CPF true")}/>
      <FormLabel>Nome Completo:</FormLabel>
      <FormInput onChangeText={() => console.log("Valida Nome Completo - setState NOME true")}/>
      <FormLabel>Celular:</FormLabel>
      <FormInput onChangeText={() => console.log("Valida celular - setState CELULAR true")}/>
      <Button
        raised
        icon={{name: 'done-all'}}
        title='Finalizar'
        backgroundColor='green'
        onPress={() => { this.props.navigator.push(this.props.routes[2]) }}
      />
      </View>
    )
  }
}
