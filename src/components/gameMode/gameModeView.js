'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { msg_home } from '../../commons/texts';

import GameModeController from './gameModeController';

import GameModeModel from './gameModeModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

class GameModeView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new GameModeModel(this);
    this.controller = new GameModeController(this,this.model);
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
                  onPress = {item.item.onPress}
                />
              )
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

module.exports = GameModeView;
