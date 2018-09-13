'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,TextInput
} from 'react-native';

import Button from '../commons/button';

class HomeView extends TemplateView {

  static navigationOptions = {
    header: null;
  };

  constructor(props) {
    super(props);
    this.model = new HomeModel(this);
    this.controller = new HomeController(this,this.model);
  }

  render(){
    return(
      <view>
        <Button
          title={msg_home.learn}
          onPress = {() => this.controller.learn()}
        />
      <View>
    )
  }
}
