'use strict'

import React, { Component } from 'react';
import {
  Text
  ,ScrollView
} from 'react-native';

import Template from '../commons/template';

class AboutUs extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ScrollView style={{flex: 1, paddingTop: 40, paddingHorizontal: 5}}>
        <Text style={{fontSize: 24}}>{'Nuestra Misión:'}</Text>
        <Text>{'Kadmiel es un estudio de desarrollo con división de mantenimiento de software y hardware la cual se dedica principalmente a crear software personalizado con énfasis en la elaboración de video juegos que dejen por lo menos una enseñanza para la vida con cada juego desarrollado.'}</Text>
        <Text style={{fontSize: 24, marginTop:20}}>{'Nuestra Visión:'}</Text>
        <Text>{'Kadmiel S.A.S. proyecta para el 2020 ser reconocida por su altísima calidad en desarrollo de software y mantenimiento de computadores y dispositivos móviles a nivel nacional como empresa referencia de vanguardia, innovación y honestidad tanto por el ámbito empresarial como por el de nuestros usuarios y siempre con una ética intachable.'}</Text>
        <Text style={{marginTop:20}}>{'Servicio técnico en dispositivos con S.O. tanto en software como en hardware además de la creación de juegos, software, paginas web, intranet y más.'}</Text>
      </ScrollView>
    )
  }

}

module.exports = AboutUs;
