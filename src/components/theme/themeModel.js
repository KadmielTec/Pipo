'use strict'

import React, { Component } from 'react';

var view;

var self;

class ThemeModel {
  constructor(_view) {
    view = _view;
    self = this;
    let ds = [
      {title: 'Matematicas', theme: 0, icon: 'plus', color:'red'}
      ,{title: 'Ciencia', theme: 1, icon: 'flask', color:'blue'}
      ,{title: 'Historia', theme: 2, icon: 'globe', color:'brown'}
      ,{title: 'Ortografía', theme: 3, icon: 'check-circle', color:'green'}
      ,{title: 'Aleatorio', theme: 4, icon: 'random', color:'pink'}
    ]

    if(ds.length % 2 != 0) ds.push({blank: true});
    view.state = {
      dataSource: ds
    }
  }

  themeSelected(theme){
    view.redirect('gameMode', {theme: theme.theme, themeName: theme.title});
  }

}

module.exports = ThemeModel;
