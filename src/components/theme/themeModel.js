'use strict'

import React, { Component } from 'react';

var view;

var self;

class ThemeModel {
  constructor(_view) {
    view = _view;
    self = this;
    let ds = [
      {title: 'Matematicas', gameMode: 0}
      ,{title: 'Ciencia', gameMode: 1}
      ,{title: 'Historia', gameMode: 2}
      ,{title: 'Videojuegos', gameMode: 3}
      ,{title: 'Deporte', gameMode: 4}
    ]
    view.state = {
      dataSource: ds
    }
  }

  gameModeSelected(gameMode){
    view.redirect('gameMode', {gameMode: gameMode});
  }

}

module.exports = ThemeModel;
