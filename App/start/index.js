import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class StartPage extends Component {

  render(){
      return (
        <View>
        <Image source={{uri: 'http://192.168.1.5:8080/examples/batalhao.png'}} style={{ width: 300, height: 300, alignSelf: 'center'}}/>
        <View style={{paddingTop: 130, alignItems: 'center'}}>
        <Text style={{paddingTop: 10, fontSize: 20, textAlign: 'center', color: 'white'}}>Caracterização de Suspeitos</Text>
        </View>

        <Button
          title='Entrar'
          backgroundColor='green'
          onPress={() => { this.props.navigator.push(this.props.routes[1])}}
        />
        </View>
      )
  }

}
