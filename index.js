import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import  TemplateView  from './src/components/templateView';
import { Root } from "native-base";

export default class Pipo extends Component {
  render() {
    return (
      <Root>
        <TemplateView/>
      </Root>
    );
  }
}
AppRegistry.registerComponent('Pipo', () => Pipo);
