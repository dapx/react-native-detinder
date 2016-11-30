import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Navigator
} from 'react-native';

import * as api from '../api';
import { Card, Button } from 'react-native-elements';
export default class Perfil extends Component {

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

  componentWillMount(){
    console.log(api.getDetento());
    detento = api.getDetento();
  }

  render() {
    return (
      <ScrollView>
      <Card title='Suspeito Identificado!'>
      <Text style={{fontSize: 24}}> As informações que seriam exibidas aqui estará disponível na próxima atualização.</Text>
      </Card>
      </ScrollView>
    );
  }
}
