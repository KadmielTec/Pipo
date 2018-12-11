'use strict'

import React, { Component } from 'react';

var view;

var self;

class GameModeModel {
  constructor(_view) {
    view = _view;
    self = this;
    let mode = view.get_params();
    let ds = [
      {title: 'Aprende', onPress: () => {console.log('Modo Aprende con tema ', mode.gameMode)}}
      ,{title: 'Contrareloj', onPress: () => {console.log('Modo Contrareloj con tema ', mode.gameMode)}}
      ,{title: 'Libre', onPress: () => {console.log('Modo Libre con tema ', mode.gameMode)}}
      ,{title: 'Competición', onPress: () => {console.log('Modo Competición con tema ', mode.gameMode)}}
      ,{title: 'Retar', onPress: () => {console.log('Modo Retar con tema ', mode.gameMode)}}
    ]
    view.state = {
      dataSource: ds
    }
  }

  learn(){
    console.log('Entrando a modo aprende');
  }

  contraReloj(){
    console.log('Entrando a modo contraReloj');
  }

  freeMode(){
    console.log('Entrando a modo Libre');
  }

}

module.exports = GameModeModel;
