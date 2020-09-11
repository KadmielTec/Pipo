'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { Header } from 'react-native-elements';
import ThemeController from './themeController';
import ThemeModel from './themeModel';
import Template from '../../commons/template';
import ThemeRow from './itemRenders/themeRow';
import stringsOfLanguages from '../../commons/texts';
class ThemeView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new ThemeModel(this);
    this.controller = new ThemeController(this,this.model);
    this.languageTheme= this.get_params();
    console.log("theme view: "+this.get_params());
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.pop() }}
          centerComponent={{ text: stringsOfLanguages.theme, style: { color: '#fff' } }}
          backgroundColor={'#FF7B08'}
        />
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => index}
              renderItem={(item) => {
                console.log(item);
                return(
                  <ThemeRow
                    title = {item.item.title}
                    onPress = {() => this.controller.themeSelected(item.item,this.languageTheme)}
                    blank = {item.item.blank}
                    icon = {item.item.icon}
                    color ={item.item.color}
                    type = {item.item.type}
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
