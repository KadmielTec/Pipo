'use strict'

import React, { Component } from 'react';
import {
  Text
  ,ScrollView
} from 'react-native';

import Template from '../commons/template';

import {msg_about} from '../commons/texts';

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
        <Text style={{fontSize: 24}}>{msg_about.str_mision_body}</Text>
        <Text>{msg_about.str_mision_title}</Text>
        <Text style={{fontSize: 24, marginTop:20}}>{msg_about.str_vision_title}</Text>
        <Text>{msg_about.str_vision_body}</Text>
        <Text style={{marginTop:20}}>{'Servicio técnico en dispositivos con S.O. tanto en software como en hardware además de la creación de juegos, software, paginas web, intranet y más.'}</Text>
      </ScrollView>
    )
  }

}

module.exports = AboutUs;
