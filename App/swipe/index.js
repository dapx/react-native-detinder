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

class Card extends Component {
  render() {
    return (
      <View style={[styles.card]}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        <Text>{this.props.text}</Text>
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

let Cards = [
 {text: 'Nemo', image: 'http://wallpaper.ultradownloads.com.br/166969_Papel-de-Parede-Procurando-Nemo-Finding-Nemo--166969_1600x1200.jpg'},
 {text: 'Dori', image: 'https://pbs.twimg.com/profile_images/663805112075362307/F5sQHXRS.jpg'},
 {text: 'Pablo Escobar', image: 'http://paaash.pt/wp-content/uploads/2015/10/pablo-escobar-factos-interessantes-21.jpg'},
 {text: 'Hitlar', image: 'http://supertela.net/wp-content/uploads/2015/11/adolf-hitler-1889-1945-1372686850604_300x300.jpg'},
 {text: 'Bin Laden', image: 'http://esq.h-cdn.co/assets/cm/15/05/54cc156f402fc_-_esq-osama-bin-laden-0911-lg.jpg'},
 {text: 'Mr Bean', image: 'http://www.mrbeantvseries.co.uk/bean3.jpg'},
 {text: 'Kevin Mitnick', image: 'http://i2.wp.com/top10mais.org/wp-content/uploads/2013/10/Kevin-Mitnick.jpg?w=580'},
 {text: 'Daniel Lugo', image: 'http://murderpedia.org/male.L/images/lugo_daniel/daniel-lugo-3.jpg'},
 {text: 'Eminem', image: 'https://static.minilua.com/wp-content/uploads/2010/05/eminememinem1179706_thumb.jpg'},
 {text: 'Lula', image: 'http://imguol.com/c/noticias/6d/2015/09/01/instituto-lula-publica-imagem-de-ex-presidente-preso-pelo-dops-e-diz-sem-uniforme-listrado-de-desenho-animado-1441136591599_300x420.jpg'},
]

export default class SwipeWrapper extends Component {

  constructor(props){
  super(props);
  this.state = {
      cards: Cards,
    };
  }

  handleYup (card) {
    console.log(`Adicionado Suspeito ${card.text}`)
  }

  handleNope (card) {
    console.log(`Não foi dessa vez ${card.text}`)
  }

  render() {
    return (
      <View>
      <Nav navigator={this.props.navigator} routes={this.props.routes} routeId={this.props.routeId} />
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
