'use strict'

import { Body, Button, Container, Header, Left, Right, Thumbnail } from "native-base";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../commons/components/icon';
import { get_peng_images } from '../../commons/images';
import Template from '../../commons/template';
import HomeController from './homeController';
import HomeModel from './homeModel';



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
        <Body style={{padding: 10, width: '100%'}}>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 5, marginLeft: '60%'}}>
            <View style={{alignItems: 'flex-end', justifyContent: 'center', backgroundColor: 'whitesmoke', borderRadius: 8, padding: 3, flexDirection: 'row', marginRight: 10}}>
              <Icon name={'fish'} size={20} />
              <Text style={{fontSize: 20}}>{this.state.points}</Text>
            </View>
            <TouchableOpacity onPress={() => this.controller.reload()}>
              <Icon name={'reload'} size={20} />
            </TouchableOpacity>
          </View>
          <Thumbnail style={{borderRadius: 100, width: 200, height: 200}} source={get_peng_images('baby')} />
          <Text style={{fontFamily: 'Ubuntu'}}>{this.state.user}</Text>
          <Button full large light onPress={this.controller.play} style={{margin: 20}}>
            <Text style={{fontFamily: 'Ubuntu', color: '#FF7B08'}}>¡Jugar!</Text>
          </Button>
        </Body>
      </Container>
    )
  }
}

module.exports = HomeView;
