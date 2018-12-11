'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { msg_home } from '../../commons/texts';

import ThemeController from './themeController';

import ThemeModel from './themeModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

class ThemeView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new ThemeModel(this);
    this.controller = new ThemeController(this,this.model);
  }

  render(){
    return(
      <ScrollView style={{flex: 1, paddingTop: 40}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={(item, index) => index}
            renderItem={(item) => {
              return(
                <Button
                  title = {item.item.title}
                  onPress = {() => this.controller.gameModeSelected(item.item.gameMode)}
                />
              )
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

module.exports = ThemeView;
