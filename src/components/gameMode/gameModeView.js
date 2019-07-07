'use strict'

import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Template from '../../commons/template';
import GameModeController from './gameModeController';
import GameModeModel from './gameModeModel';






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
          backgroundColor={'#FF7B08'}
        />
        <ScrollView>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <FlatList
              data={this.state.dataSource}
              keyExtractor={(item, index) => index}
              renderItem={({item}, index) => {
                let disabled = item.title == 'Clásico' ? false : true;
                return(
                  <ListItem
                    key={index}
                    title={item.title}
                    onPress={item.onPress}
                    disabled={disabled}
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
