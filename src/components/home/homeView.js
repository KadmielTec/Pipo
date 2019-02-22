'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Item,
  Input,
  Label,
  Form,
  Button,
  Thumbnail
} from "native-base";
import { msg_home } from '../../commons/texts';
import { Avatar } from 'react-native-elements';
import HomeController from './homeController';
import HomeModel from './homeModel';
import Template from '../../commons/template';
import Icon from '../../commons/components/icon';

class HomeView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new HomeModel(this);
    this.controller = new HomeController(this,this.model);
  }

  render(){
    return(
      <Container>
        <Header androidStatusBarColor={'#FF7B08'} style={{backgroundColor: '#FF7B08'}}>
          <Left>
            <Button hasText transparent style={{height: '100%'}}>
              <Text onPress={this.controller.logout}>Salir</Text>
            </Button>
          </Left>
          <Body style={{alignItems: 'flex-end', justifyContent: 'center', marginRight:20}}>
            <Icon name={'pipo'} style={{color: 'white'}} size={40}/>
          </Body>
          <Right>
            <Button hasText transparent style={{height: '100%'}}>
              <Text onPress={this.controller.aboutUs} style={{height:'100%', alignItems: 'center', justifyContent: 'center'}} >Acerca de</Text>
            </Button>
          </Right>
        </Header>
        <Body style={{padding: 10}}>
          <Thumbnail style={{borderRadius: 100, width: 200, height: 200}} source={{uri: 'https://c1.staticflickr.com/6/5100/5455782332_41a421d75e_b.jpg'}} />
          <Text style={{fontFamily: 'Ubuntu'}}>{this.state.user}</Text>
          <Button full large light onPress={this.controller.play} style={{marginVertical: 20}}>
            <Text style={{fontFamily: 'Ubuntu', color: '#FF7B08'}}>¡Jugar!</Text>
          </Button>
        </Body>
      </Container>
    )
  }
}

module.exports = HomeView;
