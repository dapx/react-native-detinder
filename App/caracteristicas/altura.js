import React, { Component } from 'react';
import {
  Text,
  View,
  Slider
} from 'react-native';
import * as api from '../api';
import { FormLabel, CheckBox } from 'react-native-elements';

export default class Altura extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDisable: true,
      altura: null
    };
  }

  onAlturaChange(value){
    this.setState({altura: value});
    api.defineDetentoString('ind_altura', value);
  }

  disableMe(){
    this.setState({ isDisable: !this.state.isDisable });
    if (!this.state.isDisable) {
      this.setState({ altura: undefined });
      api.deleteDetentoAttr('ind_altura');
    } else {
      this.setState({altura: 1.5 });
      api.defineDetentoString('ind_altura', 1.5);
    }
  }

  render(){
    return (
    <View>
    <FormLabel>Altura Aproximada:</FormLabel>
    <Slider
        disabled={this.state.isDisable}
        value={this.state.altura}
        step={0.1}
        minimumValue={0.5}
        maximumValue={2.5}
        onValueChange={(value) => this.onAlturaChange(value)} />
    <Text style={{textAlign: 'center'}}>{this.state.altura}</Text>
    <CheckBox
    title='SEM INFORMAÇÃO'
    checked={this.state.isDisable}
    onPress={() => this.disableMe()}
    />
    </View>
    )
  };
}
