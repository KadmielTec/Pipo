'use strict'

import React, { Component } from 'react';

var view;

<<<<<<< HEAD
var params;
=======
var self;
>>>>>>> origin/master

class GameModeModel {
  constructor(_view) {
    view = _view;
<<<<<<< HEAD
    let self = this;
    params = view.get_params();
    let ds = [
      {title: 'Aprende', onPress:() => self.onPressMode('Aprende')}
      ,{title: 'Contrareloj', onPress:() => self.onPressMode('Contrareloj')}
      ,{title: 'Libre', onPress:() => self.onPressMode('Libre')}
      ,{title: 'Competición', onPress:() => self.onPressMode('Competición')}
      ,{title: 'Retar', onPress:() => self.onPressMode('Retar')}
    ];
=======
    self = this;
    let mode = view.get_params();
    let ds = [
      {title: 'Aprende', onPress: () => {console.log('Modo Aprende con tema ', mode.gameMode)}}
      ,{title: 'Contrareloj', onPress: () => {console.log('Modo Contrareloj con tema ', mode.gameMode)}}
      ,{title: 'Libre', onPress: () => {console.log('Modo Libre con tema ', mode.gameMode)}}
      ,{title: 'Competición', onPress: () => {console.log('Modo Competición con tema ', mode.gameMode)}}
      ,{title: 'Retar', onPress: () => {console.log('Modo Retar con tema ', mode.gameMode)}}
    ]
>>>>>>> origin/master
    view.state = {
      dataSource: ds
    }
  }

<<<<<<< HEAD
  onPressMode(type){
    view.redirect('question', {gamemode: params.gameMode, gametype: type})
  }
=======
  learn(){
    console.log('Entrando a modo aprende');
  }

  contraReloj(){
    console.log('Entrando a modo contraReloj');
  }

  freeMode(){
    console.log('Entrando a modo Libre');
  }

>>>>>>> origin/master
}

module.exports = GameModeModel;
