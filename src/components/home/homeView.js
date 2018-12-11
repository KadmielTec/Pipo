'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { msg_home } from '../../commons/texts';

import HomeController from './homeController';

import HomeModel from './homeModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

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
      <ScrollView style={{flex: 1, paddingTop: 40}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            title = {'Jugar'}
            onPress = {this.controller.play}
          />
          <Button
            title = {'Acerca de'}
            onPress = {this.controller.aboutUs}
          />
          <Button
            title = {'Salir'}
            onPress = {this.controller.logout}
          />
        </View>
      </ScrollView>
    )
  }
}

module.exports = HomeView;
