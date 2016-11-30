import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Slider,
  Navigator
} from 'react-native';

import { Card, FormLabel, Button } from 'react-native-elements';
import Nav from '../nav/index';
import Perguntas from '../caracteristicas/perguntas';
import Altura from '../caracteristicas/altura';
import Tags from 'react-native-tags';
import * as api from '../api';

export default class Form extends Component {

  constructor(props){
  super(props);
  this.state = {
      teste: [],
      detento: {
        foto_arq: null,
        ind_nm: null,
        ind_alcunha: null,
        ind_nm_mae: null,
        ind_rg: null,
        ind_rguf: null,
        ind_cpf: null,
        ind_dtnasc: null,
        ind_fone: null,
        ind_altura: null,
        ind_tp_tatoo: null,
        ind_ds_tatoo: null,
        ind_tp_scar: null,
        ind_ds_scar: null,
        ind_obs: null,
        indcor_ds: null,
        indcabelo_ds: null,
        indolhos_ds: null,
        log_nm: null,
        log_cep: null,
        bai_nm: null,
        cid_nm: null,
        log_nr: null,
        ind_complemento: null
      }
    };
  }

  sendToServer(char) {
    console.log("Criado caracteristicas")
  }

  onTesteChange(value, key){
    api.defineDetento(key, value);
  }

  render() {
    return (
      <ScrollView>
      <FormLabel>Nome/Apelido:</FormLabel>
      <Tags initialText=""
        initialTags={this.state.teste}
        onChangeTags={(value) => this.onTesteChange(value, ['ind_alcunha'])} />
      <FormLabel>Pele:</FormLabel>
      <Tags initialText=""
          initialTags={this.state.teste}
          onChangeTags={(value) => this.onTesteChange(value, ['indcor_ds'])} />
      <FormLabel>Olhos:</FormLabel>
      <Tags initialText=""
        initialTags={this.state.teste}
        onChangeTags={(value) => this.onTesteChange(value, ['indolhos_ds'])} />
      <FormLabel>Cabelo:</FormLabel>
      <Tags initialText=""
        initialTags={this.state.teste}
        onChangeTags={(value) => this.onTesteChange(value, ['indcabelo_ds'])} />
      <FormLabel>Tatoo:</FormLabel>
      <Tags initialText=""
        initialTags={this.state.teste}
        onChangeTags={(value) => this.onTesteChange(value, ['ind_ds_tatoo'])} />
      <FormLabel>Cicatriz:</FormLabel>
      <Tags initialText=""
        initialTags={this.state.teste}
        onChangeTags={(value) => this.onTesteChange(value, ['ind_ds_scar'])} />

      <View style={{marginTop: 10}}>
      <Button
      raised
      icon={{name: 'pageview'}}
      backgroundColor='green'
      title={'Continuar'}
      onPress={() => this.props.navigator.push(this.props.routes[3])} />
      </View>
      </ScrollView>
    );
  }
}
