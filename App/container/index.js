import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');
import SwipeWrapper from '../swipe/index';
import Nav from '../nav/index';
import Form from '../formulario/index';
import Form2 from '../formulario/index2';
import StartPage from '../start/index';
import Cadastro from '../cadastro/index';
const routes = [
  {id: 0, title: "SignUp"},
  {id: 1, title: "Dados da Vitima"},
  {id: 2, title: "Perfil Suspeito"},
  {id: 3, title: "Perguntas"},
  {id: 4, title: "Possíveis Suspeitos"}
]

export default class NavigatorApp extends Component {

  renderScene(route, navigator){
    switch (route.id){
      case 0:
      return (
        <View style={styles.container}>
        <Image source={{uri: "https://s-media-cache-ak0.pinimg.com/564x/8d/44/da/8d44da5b9f38ba16d7d820c461fa1328.jpg"}} style={{ flex: 1, width: windowSize.width, height: windowSize.height, position: 'absolute', left: 0, top: 0 }}>
        <StartPage navigator={navigator} routes={routes} routeId={route.id}/>
        </Image>
        </View>
      )
      break;
      case 1:
      return (
        <View>
        <Nav navigator={navigator} routeId={route.id} routes={routes} />
        <Cadastro navigator={navigator} routes={routes} routeId={route.id}/>
        </View>
      )
      break;
      case 2:
      return (
        <ScrollView>
        <Nav navigator={navigator} routeId={route.id} routes={routes} />
        <Form navigator={navigator} routes={routes} routeId={route.id}/>
        </ScrollView>
      )
      break;
      case 3:
      return (
        <View>
        <Nav navigator={navigator} routeId={route.id} routes={routes} />
        <Form2 navigator={navigator} routes={routes} routeId={route.id}/>
        </View>
      )
      break;
      case 4:
      return (
        <View>
        <Nav navigator={navigator} routes={routes} routeId={route.id} />
        <SwipeWrapper navigator={navigator} routes={routes} routeId={route.id} />
        </View>
      )
      break;
      default:
      return (
        <View>
        <Nav navigator={navigator} routes={routes} routeId={route.id} />
        <SwipeWrapper navigator={navigator} routes={routes} routeId={route.id} />
        </View>
      )
      break;
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
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
