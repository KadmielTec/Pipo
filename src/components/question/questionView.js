'use strict'

import React, { Component } from 'react';
import {
  Text
  ,View
  ,ScrollView
  ,FlatList
} from 'react-native';

import { msg_home } from '../../commons/texts';

import QuestionController from './questionController';

import QuestionModel from './questionModel';

import Button from '../../commons/button';

import Template from '../../commons/template';

class QuestionView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new QuestionModel(this);
    this.controller = new QuestionController(this,this.model);
  }

  render(){
    return(
      <ScrollView style={{flex: 1, paddingTop: 40}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text>Pregunta: {this.state.qt}</Text>
          <Text>Modo: {this.state.gamemode}</Text>
          <Text>Tipo: {this.state.gametype}</Text>
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

module.exports = QuestionView;