'use strict'

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Button } from 'react-native-elements';

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
    ,fontSize: PropTypes.number
  };

  static defaultProps = {
     title:  ''
    ,buttonStyle: {}
    ,containerStyle: {}
    ,titleStyle: {}
    ,fontSize: 13
    ,onPress: () => {}
  };

  render(){
    return(
      <Button
        title={this.props.title}
        onPress={() => this.props.onPress()}
        buttonStyle={[{backgroundColor: 'black', borderWidth: 2, borderColor: 'white', borderRadius: 10}, this.props.buttonStyle]}
        containerStyle={[{marginVertical: 10 }, this.props.containerStyle]}
        titleStyle={[{color: 'white'}, this.props.titleStyle]}
        fontSize={this.props.fontSize}
      />
    )
  }

}

module.exports = Buttons;
