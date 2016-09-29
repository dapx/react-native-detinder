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

import { Button, Icon, FormLabel, FormInput, CheckBox } from 'react-native-elements'

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
      <View>
      <FormLabel>Caracteristicas</FormLabel>
      <CheckBox
        title='Tatuagem'
        checked={this.state.tatuagem}
        onPress={() => this.setState({ tatuagem: !this.state.tatuagem })}
        />
      <CheckBox
        title='adornos'
        checked={this.state.adornos}
        onPress={() => this.setState({ adornos: !this.state.adornos })}
        />
      <View>
      <FormLabel>Altura Aproximada:</FormLabel>
      <Slider
          minimumValue={0.5}
          maximumValue={2.5}
          onValueChange={(value) => this.setState({altura: value})} />
      <Text style={{textAlign: 'center'}}>{this.state.altura}</Text>
      </View>
      <FormLabel>Nome:</FormLabel>
      <FormInput onChangeText={() => console.log("TESTE")}/>
      <Button
        raised
        icon={{name: 'pageview'}}
        title='Procurar'
        onPress={() => { this.props.navigator.push(this.props.routes[3]) }}
      />
      </View>
    )
  }
}
