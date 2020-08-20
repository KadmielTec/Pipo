'use strict'

import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { Card, ListItem, Rating } from 'react-native-elements';
import Template from '../../commons/template';
import QuestionController from './questionController';
import QuestionModel from './questionModel';

class QuestionView extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.model = new QuestionModel(this);
    this.controller = new QuestionController(this,this.model);
    console.log("question view: "+ this);
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
        </View>
      </ScrollView>
    )
  }
}

module.exports = QuestionView;
