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

import { Avatar } from 'react-native-elements';

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
        <View style = {{justifyContent: 'center', alignItems: 'center'}}>
          <Avatar
            xlarge
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            activeOpacity={0.7}
            containerStyle={{flex: 2, margin: 85}}
          />
          <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Button
                title = {'Acerca de'}
                onPress = {this.controller.aboutUs}
                titleStyle = {{fontSize: 9}}
                containerStyle={{marginVertical: 0 }}
              />
            </View>
            <View style={{flex: 2}}>
              <Button
                title = {'Jugar'}
                onPress = {this.controller.play}
                buttonStyle = {{backgroundColor: 'orange', borderColor: 'darkorange'}}
                titleStyle = {{fontSize: 20}}
                containerStyle={{marginVertical: 0 }}
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                title = {'Salir'}
                onPress = {this.controller.logout}
                titleStyle = {{fontSize: 9}}
                containerStyle={{marginVertical: 0 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

module.exports = HomeView;
