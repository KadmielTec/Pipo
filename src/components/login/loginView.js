'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
} from 'react-native';

import { msg_login } from '../../commons/texts';

import { FormLabel, FormInput, Card } from 'react-native-elements'

import LoginController from './loginController';

import LoginModel from './loginModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

import Visible from '../../commons/visible';

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
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#F5FCFF', paddingTop: 40}}>
        <Card
          title={msg_login.login}
          containerStyle={{width: 300, borderRadius: 5}}
        >
          <Visible visible={this.state.login}>
            <FormLabel>{msg_login.username}</FormLabel>
            <FormInput
              ref={'username'}
              inputStyle={{borderColor: 'black', borderWidth: 1, width: 230}}
              value={this.state.username}
              onChangeText={(text)=>{this.setState({username: text})}}
              onSubmitEditing={() => this.refs.password.focus()}
              blurOnSubmit={false}
              selectTextOnFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
            />
            <FormLabel>{msg_login.password}</FormLabel>
            <FormInput
              ref={'password'}
              inputStyle={{borderColor: 'black', borderWidth: 1, width: 230}}
              value={this.state.password}
              onChangeText={(text)=>{this.setState({password: text})}}
              onSubmitEditing={this.controller.login}
              blurOnSubmit={false}
              selectTextOnFocus={true}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
            />
          </Visible>
          <Visible visible={!this.state.login}>
            <FormLabel>{msg_login.username}</FormLabel>
            <FormInput
              ref={'username'}
              inputStyle={{borderColor: 'black', borderWidth: 1, width: 230}}
              value={this.state.username}
              onChangeText={(text)=>{this.setState({username: text})}}
              onSubmitEditing={() => this.refs.password.focus()}
              blurOnSubmit={false}
              selectTextOnFocus={true}
              autoCorrect={false}
              autoCapitalize='none'
            />
            <FormLabel>{msg_login.password}</FormLabel>
            <FormInput
              ref={'password'}
              inputStyle={{borderColor: 'black', borderWidth: 1, width: 230}}
              value={this.state.password}
              onChangeText={(text)=>{this.setState({password: text})}}
              onSubmitEditing={() => this.refs.password2.focus()}
              blurOnSubmit={false}
              selectTextOnFocus={true}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
            />
            <FormLabel>{msg_login.repeatPassword}</FormLabel>
            <FormInput
              ref={'password2'}
              inputStyle={{borderColor: 'black', borderWidth: 1, width: 230}}
              value={this.state.password2}
              onChangeText={(text)=>{this.setState({password2: text})}}
              onSubmitEditing={this.controller.register}
              blurOnSubmit={false}
              selectTextOnFocus={true}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
            />
          </Visible>
        </Card>
        <View style={{flexDirection: 'row'}}>
          <Button
            title={(this.state.login) ? msg_login.register : msg_login.login}
            onPress={() => this.controller.changeForm()}
            buttonStyle={{marginTop: 30}}
          />
          <Button
            title={(this.state.login) ? msg_login.login : msg_login.register}
            onPress={(this.state.login) ? this.controller.login : this.controller.register}
            buttonStyle={{marginTop: 30}}
          />
        </View>
      </View>
    )
  }

}

module.exports = LoginView;
