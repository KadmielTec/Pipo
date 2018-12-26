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

import Visible from '../../commons/visible';

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
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex:1}}>Modo: {this.state.gamemode}</Text>
            <Text style={{flex:1}}>Tipo: {this.state.gametype}</Text>
          </View>
          <Text style={{margin: 20}}>Pregunta: {this.state.currentQuestion}</Text>
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
          <Visible visible={this.state.wrongAnswer}>
            <Text>{'Respuesta erronea!'}</Text>
          </Visible>
        </View>
      </ScrollView>
    )
  }
}

module.exports = QuestionView;
