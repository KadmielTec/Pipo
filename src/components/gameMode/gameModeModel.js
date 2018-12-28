'use strict'

import React, { Component } from 'react';

var view;

var params;

class GameModeModel {
  constructor(_view) {
    view = _view;
    let self = this;
    params = view.get_params();
    let ds = [
      {title: 'Aprende', onPress:() => self.onPressMode('Aprende')}
      ,{title: 'Contrareloj', onPress:() => self.onPressMode('Contrareloj')}
      ,{title: 'Libre', onPress:() => self.onPressMode('Libre')}
      ,{title: 'Competición', onPress:() => self.onPressMode('Competición')}
      ,{title: 'Retar', onPress:() => self.onPressMode('Retar')}
    ];
    view.state = {
      dataSource: ds,
      themeName: params.themeName
    }
  }

  onPressMode(type){
    view.redirect('question', {theme: params.theme, gametype: type})
  }
}

module.exports = GameModeModel;
