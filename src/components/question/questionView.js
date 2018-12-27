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

import { Card, ListItem } from 'react-native-elements';

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
        <Card 
          title = "Pregunta #"
          containerStyle={{width: 300, borderRadius: 5}}        
        >
          <Text>Pregunta: {this.state.currentQuestion}</Text>
          <Text>Modo: {this.state.gamemode}</Text>
          <Text>Tipo: {this.state.gametype}</Text>
        </Card>
      
          <FlatList
            data={this.state.dataSource}
            keyExtractor={(item, index) => index}
            renderItem={(item) => {
              return(
               // <Button
               //   title = {item.item.title}
              //  onPress = {item.item.onPress}
              // />
              <ListItem
                    key={item.index}
                    title={item.item.title}
                    onPress={item.item.onPress}                  
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
