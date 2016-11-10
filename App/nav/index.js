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
      return (
        <View style={{ backgroundColor: '#2192d8', flexDirection: 'row' }}>

        <TouchableOpacity onPress={() => {
            this.props.navigator.pop();
          }}>
        <Icon
          name='backspace' color='white' />
        </TouchableOpacity>

        <Text style={{paddingTop: 15, fontSize: 25, color: 'white'}}>{this.props.routes[this.props.routeId].title}</Text>
        </View>
      )
    }
  }
