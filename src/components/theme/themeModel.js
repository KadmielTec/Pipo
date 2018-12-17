'use strict'

import React, { Component } from 'react';

var view;

var self;

class ThemeModel {
  constructor(_view) {
    view = _view;
    self = this;
    let ds = [
      {title: 'Matematicas', gameMode: 0, icon: 'plus', img:'math'}
      ,{title: 'Ciencia', gameMode: 1, icon: 'flask', img:'science'}
      ,{title: 'Historia', gameMode: 2, icon: 'globe', img:'history'}
      ,{title: 'Videojuegos', gameMode: 3, icon: 'gamepad', img:'vgames'}
      ,{title: 'Deporte', gameMode: 4, icon: 'soccer-ball-o', img:'sports'}
    ]

    if(ds.length % 2 != 0) ds.push({blank: true});
    view.state = {
      dataSource: ds
    }
  }

  gameModeSelected(gameMode){
    view.redirect('gameMode', {gameMode: gameMode});
  }

}

module.exports = ThemeModel;
