'use strict'

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { FormInput } from 'react-native-elements';

class FormInput extends Component {

  constructor(props) {
    super(props);
    this.model = new LoginModel(this);
    this.controller = new LoginController(this,this.model);
  }

  static propTypes = {
    ref: PropTypes.string
    ,inputStyle: PropTypes.any
    ,value: PropTypes.string
    ,onChangeText: PropTypes.any
  };

  static defaultProps = {
     ref:  ''
    ,inputStyle: {}
    ,value: ''
    ,onChangeText: () => {}
  };

  render(){
    return(
      <FormInput
        ref={this.props.ref}
        inputStyle={{borderColor: 'black', borderWidth: 1}}
        value={this.state.username}
        onChangeText={this.props.onChangeText}
        autoCorrect={false}
        autoCapitalize='none'
      />
    )
  }

}

module.exports = FormInput;
