'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { msg_home } from '../../commons/texts';

import { Header, List, ListItem } from 'react-native-elements';

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
      <View style={{flex: 1}}>
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.pop() }}
          centerComponent={{ text: 'MODO DE JUEGO', style: { color: '#fff' } }}
          backgroundColor={'#f84936'}
        />
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => index}
              renderItem={(item) => {
                return(
                  // <Button
                  //   title = {item.item.title}
                  //   onPress = {item.item.onPress}
                  // />
                  <ListItem
                    key={item.index}
                    title={item.item.title}
                    onPress={item.item.onPress}
                  />
                )
              }}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

module.exports = GameModeView;
