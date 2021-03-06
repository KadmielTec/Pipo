'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,Image
  ,TouchableWithoutFeedback
} from 'react-native';
import {
  Container,
  Header,
  Body,
  Footer,
  Title,
  Content,
  Item,
  Input,
  Label,
  Form,
  Button
} from "native-base";
import { msg_login } from '../../commons/texts';
import LoginController from './loginController';
import LoginModel from './loginModel';
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
					<Body style={{ alignItems: "center", justifyContent: 'center' }}>
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
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
                    getRef={input => {this.user = input}}
                    onChangeText={(text)=>{this.setState({username: text})}}
                    onSubmitEditing={() => this.pass._root.focus()}
                    blurOnSubmit={false}
                    selectTextOnFocus={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                  />
                </Item>

                <Item floatingLabel>
                  <Label>{"Contraseña"}</Label>
                  <Input
                    getRef={input => {this.pass = input}}
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

              <View style={{padding: 10}}>
                <Button
                  block
                  light
                  title={msg_login.login}
                  onPress={this.controller.login}
                >
                  <Text>Iniciar sesión</Text>
                </Button>
              </View>

              <TouchableWithoutFeedback onPress={() => this.controller.changeForm()} style={{padding: 10}}>
                <View style={{ alignItems: 'center'}}>
                  <Text>Registrarse</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          }
          {!login &&
            <View>
              <Form>
                <Item floatingLabel>
                  <Label>{"Usuario"}</Label>
                  <Input
                    getRef={input => {this.user = input}}
                    onChangeText={(text)=>{this.setState({username: text})}}
                    onSubmitEditing={() => this.regPass._root.focus()}
                    blurOnSubmit={false}
                    selectTextOnFocus={true}
                    autoCorrect={false}
                    autoCapitalize='none'
                  />
                </Item>

                <Item floatingLabel>
                  <Label>{"Contraseña"}</Label>
                  <Input
                    getRef={input => {this.regPass = input}}
                    onChangeText={(text)=>{this.setState({password: text})}}
                    onSubmitEditing={() => this.regPass2._root.focus()}
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
                    getRef={input => {this.regPass2 = input}}
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

              <View style={{padding: 10}}>
                <Button
                  block
                  light
                  title={msg_login.register}
                  onPress={this.controller.register}
                >
                  <Text>Registrar</Text>
                </Button>
              </View>
              <TouchableWithoutFeedback onPress={() => this.controller.changeForm()} style={{padding: 10}}>
                <View style={{alignItems: 'center'}}>
                  <Text>Volver</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          }
        </Content>

        <Footer style={{ backgroundColor: "white" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder style={{alignItems: "center", flexDirection: "row"}}>
							<Text style={{ color: "#000", fontFamily: 'Ubuntu' }}>{'Hecho con'}</Text><Icon name={'heart'} size={20} /><Text style={{ color: "#000", fontFamily: 'Ubuntu' }}>{'en Kadmiel'}</Text>
						</View>
					</View>
				</Footer>
      </Container>
    )
  }

}

module.exports = LoginView;
