'use strict'

import React, { Component } from 'react';
import {
  Text
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
        <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) => index}
          renderItem={(item) => {
            return(
              <Button
                title={item.item.title}
                onPress = {item.item.onPress}
              />
            )
          }}
        />
      </ScrollView>
    )
  }
}

module.exports = HomeView;
