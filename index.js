import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import  TemplateView  from './src/components/templateView';

export default class Pipo extends Component {
  render() {
    return (
        <TemplateView/>
    );
  }
}
AppRegistry.registerComponent('Pipo', () => Pipo);
    