'use strict'

import React, { Component } from 'react';

import { Button } from 'react-native-elements'

class Buttons extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Button
        title={this.props.title}
        onPress={() => this.props.onPress()}
        buttonStyle={[{backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}, this.props.buttonStyle]}
        containerStyle={[{marginVertical: 10, height: 50, width: 250 }, this.props.containerStyle]}
        titleStyle={[{fontWeight: 'bold', color: 'white'}, this.props.titleStyle]}
      />
    )
  }

}

module.exports = Buttons;
