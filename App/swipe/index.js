import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator
} from 'react-native';

import Nav from '../nav/index';
import SwipeCards from 'react-native-swipe-cards';
import * as api from '../api';

class Card extends Component {
  render() {
    return (
      <View style={[styles.card]}>
        <Image style={styles.thumbnail} source={{uri: this.props.foto_arq}} />
        <Text>{this.props.ind_id}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  render() {
    return (
      <View>
        <Text>Fim da linha</Text>
      </View>
    )
  }
}

export default class SwipeWrapper extends Component {

  constructor(props){
  super(props);
  this.state = {
    cards: []
    }
  }

  componentWillMount(){
    api.fetchDetentos().then((result) => {
      console.log("Fetch Detentos: " + result);
      this.setState({ cards: result });
    });
  }

  handleYup (card) {
    console.log(`Adicionado Suspeito ${card.ind_id}`)
  }

  handleNope (card) {
    console.log(`Não foi dessa vez ${card.ind_id}`)
  }

  render() {
    return (
      <View>
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        yupText="Pego!"
        noText="Se safou!"
      />
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
    width: 300,
    height: 300,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
