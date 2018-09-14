'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,TextInput
} from 'react-native';

import { msg_login } from '../../commons/texts';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',}}>
        <View>
          <Text>{'Login'}</Text>
          <FormLabel>Name</FormLabel>
          <FormInput onChangeText={(text)=>{console.log(text)}}/>
          <FormInput
            placeholder='Password'
            errorStyle={{ color: 'red' }}
            errorMessage='Invalid Username or Password'
            onChangeText={(text)=>{console.log(text)}}
            value={this.state.password}
          />
          <Button
            title={msg_login.login}
            onPress={() => this.replace('home')}
          />
        </View>
      </View>
    )
  }

}

module.exports = LoginView;
