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

import Template from '../../commons/template';

import Visible from '../../commons/components/visible';

import { Card, ListItem, Rating } from 'react-native-elements';

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
      <ScrollView style={{flex: 1, paddingTop: 40, backgroundColor: 'white'}}>
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
          {this.state.lifesVisible &&
            <Rating
              type="heart"
              fractions={3}
              imageSize={20}
              ratingCount={3}
              readonly
              startingValue={this.state.lifes}
            />
          }
          <Card
            title = {`Pregunta #${this.state.currentIndex + 1}`}
            containerStyle={{width: 300, borderRadius: 5}}
          >
            <Text>{this.state.currentQuestion}</Text>
          </Card>

          <FlatList
            data={this.state.currentAnswers}
            keyExtractor={(item, index) => index}
            renderItem={(item) => {
              return(
                <ListItem
                  key={item.item.value}
                  title={item.item.title}
                  onPress={() => this.controller.validateAnswer(item.item.value)}
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
