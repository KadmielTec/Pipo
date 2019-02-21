'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
} from 'react-native';

import { msg_home } from '../../commons/texts';
import HomeController from './homeController';
import HomeModel from './homeModel';
import Button from '../../commons/components/button';
import Template from '../../commons/template';
import { Avatar } from 'react-native-elements';
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
      <ScrollView style={{flex: 1, backgroundColor: '#F5FCFF'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 0.5, width: 100, heigth: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF7B08', margin: 20}}>
            <Icon name={'pipo'} style={{margin: 10}} size={80} />
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flex: 3}}>
              <Button
                title = {'Jugar'}
                onPress = {this.controller.play}
                buttonStyle = {{backgroundColor: '#f84936', borderColor: '#f7331d'}}
                titleStyle = {{fontSize: 20}}
                containerStyle={{marginVertical: 0 }}
                fontSize={26}
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                title = {'Acerca de'}
                onPress = {this.controller.aboutUs}
                buttonStyle = {{backgroundColor: '#56A5EC', borderColor: '#368BC1'}}
                containerStyle={{marginVertical: 0 }}
                fontSize={11}
              />
            </View>
            <View style={{flex: 1}}>
              <Button
                title = {'Salir'}
                onPress = {this.controller.logout}
                buttonStyle = {{backgroundColor: '#56A5EC', borderColor: '#368BC1'}}
                containerStyle={{marginVertical: 0 }}
                fontSize={11}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

module.exports = HomeView;
