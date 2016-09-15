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

export default class Nav extends Component {

  constructor(props){
  super(props);
  this.state = {
      title: 'Vazio',
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
      <TouchableOpacity onPress={() => {
        if (this.props.routeId === 0) {
          this.props.navigator.push(this.props.routes[1])
        } else {
          this.props.navigator.pop();
        }
      }}>
     <Text style={{margin:10}}>Botao</Text>
     </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
})
