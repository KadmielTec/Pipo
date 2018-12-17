'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { msg_home } from '../../commons/texts';

import { Header } from 'react-native-elements';

import ThemeController from './themeController';

import ThemeModel from './themeModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

import ThemeRow from './itemRenders/themeRow';

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
      <View style={{flex: 1}}>
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.pop() }}
          centerComponent={{ text: 'TEMAS', style: { color: '#fff' } }}
        />
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => index}
              renderItem={(item) => {
                return(
                  <ThemeRow
                    title = {item.item.title}
                    onPress = {() => this.controller.gameModeSelected(item.item.gameMode)}
                    blank = {item.item.blank}
                    icon = {item.item.icon}
                    img ={item.item.img}
                  />
                )
              }}
              numColumns={2}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

module.exports = ThemeView;
