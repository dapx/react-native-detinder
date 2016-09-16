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

import SwipeWrapper from '../swipe/index';
import Nav from '../nav/index';
import Form from '../formulario/index';

const routes = [
  {id: 0, title: "Perfil Suspeito"},
  {id: 1, title: "Possíveis Suspeitos"}
]

export default class NavigatorApp extends Component {

  renderScene(route, navigator){
    if (route.id === 0){
      return (
        <View>
        <Nav navigator={navigator} routeId={route.id} routes={routes} />
        <Form navigator={navigator} routes={routes} routeId={route.id}/>
        </View>
      )
    } else {
      return (
        <View>
        <Nav navigator={navigator} routes={routes} routeId={route.id} />
        <SwipeWrapper
          navigator={navigator} routes={routes} routeId={route.id}
        />
        </View>
      )
    }
  }

  render(){
    return (
      <View style={{flex:1}}>
      <Navigator
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
