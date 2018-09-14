'use strict'

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Button } from 'react-native-elements'

class Buttons extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    title: PropTypes.string
    ,buttonStyle: PropTypes.any
    ,containerStyle: PropTypes.any
    ,titleStyle: PropTypes.any
    ,onPress: PropTypes.any
  };

  static defaultProps = {
     title:  ''
    ,buttonStyle: {}
    ,containerStyle: {}
    ,titleStyle: {}
    ,onPress: () => {}
  };

  render(){
    return(
      <Button
        title={this.props.title}
        onPress={() => this.props.onPress()}
        buttonStyle={[{backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 30}, this.props.buttonStyle]}
        containerStyle={[{marginVertical: 10, height: 50, width: 250 }, this.props.containerStyle]}
        titleStyle={[{color: 'white'}, this.props.titleStyle]}
      />
    )
  }

}

module.exports = Buttons;
