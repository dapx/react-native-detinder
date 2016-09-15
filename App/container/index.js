import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableHighlight
} from 'react-native';

import SwipeWrapper from '../swipe/index';

const routes = [
  {id: 0, title: "Identifique o criminoso"},
  {id: 1, title: "Texto"}
]

export default class NavigatorApp extends Component {

  renderScene(route, navigator){
    if (route.id == 0){
      return (
        <SwipeWrapper
        navigator={navigator}
         />
      )
    } else {
      return (
        <Text navigator={navigator}>"Hello"</Text>
      )
    }
  }

  render(){
    return (
      <View style={{flex:1}}>
      <Navigator
      style={{flex: 1}}
      initialRoute={routes[0]}
      renderScene={this.renderScene.bind(this)}/>
      </View>
     )
   }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 2,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    paddingTop: 10,
    paddingBottom: 10
  }
})
