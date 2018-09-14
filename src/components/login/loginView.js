'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,TextInput
} from 'react-native';

import { msg_login } from '../../commons/texts';

import LoginController from './loginController';

import LoginModel from './loginModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

class LoginView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new LoginModel(this);
    this.controller = new LoginController(this,this.model);
  }

  render(){
    return(
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text>{'Login'}</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(text) => {this.setState({username: text})}}
        />
        <TextInput
          onChangeText={(text) => {this.setState({password: text})}}
        />
        <Button
          title={msg_login.login}
          onPress={() => this.controller.login()}
        />
      </View>
    )
  }

}

module.exports = LoginView;
