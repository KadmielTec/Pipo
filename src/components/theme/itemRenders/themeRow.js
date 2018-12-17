
'use strict'

import React, { Component } from 'react';

import {
  Text
  ,View
  ,TouchableOpacity
  ,Dimensions
} from 'react-native';

import { Tile } from 'react-native-elements';

import { get_theme_images } from '../../../commons/images';

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
      <Tile
        imageSrc={get_theme_images(this.props.img)}
        width={width}
        onPress={this.props.onPress}
        icon={{ name: this.props.icon, type: 'font-awesome', color: 'white' }}
        title={this.props.title}
        containerStyle={{alignItems: 'center', justifyContent: 'center'}}
        featured
      />
    )
  }

  renderBlank(){
    return <View style={{width: width}} />
  }

}

module.exports = ThemeRow;
