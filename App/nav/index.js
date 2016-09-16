import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';

import { Icon } from 'react-native-elements'

export default class Nav extends Component {

  constructor(props){
  super(props);
  this.state = {
      title: 'Vazio',
    };
  }

  render() {
    if (this.props.routeId === 0){
      return (
        <View style={{ backgroundColor: '#2192d8', flexDirection: 'row' }}>
        <Icon
          name='perm-identity' color='white' />
        <Text style={{paddingTop: 15, fontSize: 25, color: 'white'}}>{this.props.routes[this.props.routeId].title}</Text>
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: '#2192d8', flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => {
          if (this.props.routeId === 0) {
            this.props.navigator.push(this.props.routes[1])
          } else {
            this.props.navigator.pop();
          }
        }}>
        <Icon
          name='backspace' color='white' />
        </TouchableOpacity>
        <Text style={{paddingTop: 15, fontSize: 25, color: 'white'}}>{this.props.routes[this.props.routeId].title}</Text>
        </View>
      )
    }
  }
}
