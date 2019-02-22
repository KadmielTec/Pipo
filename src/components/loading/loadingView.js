'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
} from 'react-native';
import Template from '../../commons/template';
import LoadingController from './loadingController';
import LoadingModel from './loadingModel';
import Icon from '../../commons/components/icon';

class LoadingView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new LoadingModel(this);
    this.controller = new LoadingController(this,this.model);
  }

  componentDidMount(){
    this.controller.redirect();
  }

  render(){
    return(
      <View style={{ felx: 1, alignItems: "center", justifyContent: 'center' }}>
        <Icon name={"pipo"} size={150} color={'#FF7B08'} />
        <View padder>
          <Text style={{color: '#5A5A5A', fontFamily: 'Ubuntu', fontStyle: 'italic', fontSize: 15}}>Aprende con Pipo</Text>
        </View>
      </View>
    )
  }

}

module.exports = LoadingView;
