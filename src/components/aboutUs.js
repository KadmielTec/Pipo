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
      <ScrollView style={{flex: 1, paddingTop: 40}}>
        <Text>{'Información general de Kadmiel...'}</Text>
      </ScrollView>
    )
  }

}

module.exports = AboutUs;
