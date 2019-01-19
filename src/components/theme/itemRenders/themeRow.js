
'use strict'

import React, { Component } from 'react';

import {
  Text
  ,View
  ,Dimensions
  ,TouchableOpacity
} from 'react-native';
import Icon from '../../../commons/components/icon';

var width;

class ThemeRow extends Component {

  constructor(props) {
    super(props);
    width = (Dimensions.get('window').width/2);
  }

  render() {
    return (this.props.blank) ? this.renderBlank() : this.renderRow();
  }

  renderRow(){
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{width: width, height: width, backgroundColor: this.props.color, alignItems: 'center'}}>
        <View style={{width: width, height: width, backgroundColor: this.props.color, alignItems: 'center', justifyContent: 'center'}} >
          <Icon
            name = {this.props.icon}
            style = {{shadowColor: 'black', shadowOffset: {width: 0, height:0}, shadowOpacity:1, elevation:5}}
            size = {32}
            color = {'white'}
          />
          <Text style={{color: 'white', shadowColor: 'black', shadowOffset: {width: 0, height:0}, shadowOpacity:1, elevation:5, margin: 5}} >
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderBlank(){
    return <View style={{width: width}} />
  }

}

module.exports = ThemeRow;
