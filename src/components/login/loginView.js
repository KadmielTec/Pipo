'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,Image
} from 'react-native';

import { msg_login } from '../../commons/texts';
import { FormLabel, FormInput, Card } from 'react-native-elements'
import { Container, Header, Body, Footer, Title, Content, Item, Input, Label, Form, Button } from "native-base";
import LoginController from './loginController';
import LoginModel from './loginModel';
// import Button from '../../commons/components/button';
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
    let login = Boolean(this.state.login)
    return(
      <Container>
        <Header androidStatusBarColor={'#FF7B08'} style={{ height: 150, backgroundColor: 'white' }}>
					<Body style={{ alignItems: "center" }}>
            <View>
              <Icon name={"pipo"} size={104} color={'#FF7B08'} />
              <View padder>
                <Text style={{color: '#5A5A5A', fontFamily: 'Ubuntu', fontStyle: 'italic'}}>Aprende con Pipo</Text>
              </View>
            </View>
					</Body>
				</Header>

        <Content style={{backgroundColor: '#EBEBEB'}}>
            {login &&
              <View>
                <Form>
                  <Item floatingLabel>
                    <Label>{"Usuario"}</Label>
                    <Input
                      onChangeText={(text)=>{this.setState({username: text})}}
                      blurOnSubmit={false}
                      selectTextOnFocus={true}
                      autoCorrect={false}
                      autoCapitalize='none'
                    />
                  </Item>

                  <Item floatingLabel>
                    <Label>{"Contraseña"}</Label>
                    <Input
                      onChangeText={(text)=>{this.setState({password: text})}}
                      onSubmitEditing={this.controller.login}
                      blurOnSubmit={false}
                      selectTextOnFocus={true}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      secureTextEntry={true}
                    />
                  </Item>
                </Form>

                <View padder>
                  <Button
                    block
                    light
                    title={msg_login.login}
                    onPress={this.controller.login}
                  >
                    <Text>Login</Text>
                  </Button>
                </View>

                <Text onPress={() => this.controller.changeForm()}>Register</Text>
              </View>
            }
            {!login &&
              <View>
                <Form>
                  <Item floatingLabel>
                    <Label>{"Usuario"}</Label>
                    <Input
                      onChangeText={(text)=>{this.setState({username: text})}}
                      blurOnSubmit={false}
                      selectTextOnFocus={true}
                      autoCorrect={false}
                      autoCapitalize='none'
                    />
                  </Item>

                  <Item floatingLabel>
                    <Label>{"Contraseña"}</Label>
                    <Input
                      onChangeText={(text)=>{this.setState({password: text})}}
                      blurOnSubmit={false}
                      selectTextOnFocus={true}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      secureTextEntry={true}
                    />
                  </Item>

                  <Item floatingLabel >
                    <Label>{"Confirmar contraseña"}</Label>
                    <Input
                      onChangeText={(text)=>{this.setState({password2: text})}}
                      onSubmitEditing={this.controller.register}
                      blurOnSubmit={false}
                      selectTextOnFocus={true}
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      secureTextEntry={true}
                    />
                  </Item>
                </Form>

                <View padder>
                  <Button
                    block
                    light
                    title={msg_login.register}
                    onPress={this.controller.register}
                  >
                    <Text>Register</Text>
                  </Button>
                </View>
              </View>
            }
        </Content>

        <Footer style={{ backgroundColor: "white" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000", fontFamily: 'Ubuntu' }}>Made with love at Kadmiel</Text>
						</View>
					</View>
				</Footer>
      </Container>
    )
  }

}

module.exports = LoginView;
