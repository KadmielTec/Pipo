'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,Image
} from 'react-native';

import { msg_login } from '../../commons/texts';
import { FormLabel, FormInput, Card } from 'react-native-elements'
import { Container, Header, Body, Footer, Title, Content } from "native-base";
import LoginController from './loginController';
import LoginModel from './loginModel';
import Button from '../../commons/components/button';
import Template from '../../commons/template';
import Visible from '../../commons/components/visible';
import Icon from '../../commons/components/icon';

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
      <Container>
        <Header style={{ height: 200, backgroundColor: 'white' }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name={"pipo"} size={104} color={'#FF7B08'} />
            <Title style={{color: 'black'}}>Aprende con Pipo</Title>
					</Body>
				</Header>

        <Content style={{backgroundColor: '#EBEBEB'}}>
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
        </Content>

        <Footer style={{ backgroundColor: "white" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made with love at </Text>
						</View>
						<Image
							source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
      </Container>
    )
  }

}

module.exports = LoginView;
