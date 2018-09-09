'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,TouchableOpacity
  ,TextInput
} from 'react-native';

import { Button } from 'react-native-elements'

import TemplateView from '../templateView';

class LoginView extends TemplateView {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new LoginModel(this);
    this.controller = new LoginController(this,this.model);
  }

  render() {
    return (
      <View>
        <Text>{'Login'}</Text>
        <Button
          title='Iniciar Sesión'
          onPress={() => this.controller.login()}
          buttonStyle={{backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}}
          containerStyle={{marginVertical: 10, height: 50, width: 250 }}
          titleStyle={{fontWeight: 'bold'}}
        />
      </View>
    )
  }

}

module.exports = LoginView;
