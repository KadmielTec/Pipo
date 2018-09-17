'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,TextInput
} from 'react-native';

import { msg_login } from '../../commons/texts';

import { FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements'

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
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#F5FCFF', paddingTop: 30}}>
        {/* <View style={{backgroundColor: 'white', width: 300, justifyContent: 'center', margin: 20, paddingBottom: 20}}> */}
        <Card
          title="Iniciar sesión"
          containerStyle={{width: 300}}
        >
          <FormLabel>Username</FormLabel>
          <FormInput
            value={this.state.username}
            onChangeText={(text)=>{this.setState({username: text})}}
            autoCorrect={false}
            autoCapitalize='none'
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            value={this.state.password}
            onChangeText={(text)=>{this.setState({password: text})}}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize='none'
          />
        </Card>
        {/* </View> */}
        <Button
          title={msg_login.login}
          onPress={this.controller.login}
          buttonStyle={{marginTop: 30}}
        />
      </View>
    )
  }

}

module.exports = LoginView;
