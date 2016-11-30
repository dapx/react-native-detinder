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
        <View style={{ backgroundColor: 'green', flexDirection: 'row', alignItems: 'center', padding: 10 }}>

        <TouchableOpacity onPress={() => {
            this.props.navigator.pop();
          }}>
        <Icon
          name='backspace' color='white' />
        </TouchableOpacity>

        <Text style={{alignSelf: 'center', fontSize: 25, color: 'white', paddingLeft: 10}}>{this.props.routes[this.props.routeId].title}</Text>
        </View>
      )
    }
  }
