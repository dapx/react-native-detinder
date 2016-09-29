import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export default class StartPage extends Component {

  render(){
      return (
        <View>
        <View style={{alignItems: 'center'}}>
        <Image style={{width: 300, height: 300, }} source={{uri: "https://bitbucket.org/repo/GKper5/images/2257006844-logo%20detinder.png"}} />
        <Text style={{fontSize: 20, textAlign: 'center'}}>Detinder</Text>
        </View>
        <SocialIcon
          title='Sign Up'
          button
          type='facebook'
          onPress={() => { this.props.navigator.push(this.props.routes[1])}}
        />
        </View>
      )
  }

}
