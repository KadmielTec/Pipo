'use strict'

import React, { Component } from 'react';

import { View } from 'react-native';

import { Navigator } from './route';

let global_ = require('../commons/global');

class TemplateView extends Component {

  constructor(props){
    super(props);
    this.state = {
     screenlock_active: false
    };
  }

  render(){
    return(
      <View>
        <Navigator onNavigationStateChange={(prevState, newState) => this.set_current_screen(prevState, newState)}/>
      </View>
    );
  }

  set_current_screen(prevState, newState) {
    global_.set_current_screen(newState);
  }
}

module.exports = TemplateView;
