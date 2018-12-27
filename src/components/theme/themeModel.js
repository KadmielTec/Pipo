'use strict'

import React, { Component } from 'react';

var view;

var self;

class ThemeModel {
  constructor(_view) {
    view = _view;
    self = this;
    let ds = [
      {title: 'Matematicas', theme: 0, icon: 'plus', color:'#c0000e'}
      ,{title: 'Ciencia', theme: 1, icon: 'flask', color:'#008bcb'}
      ,{title: 'Historia', theme: 2, icon: 'globe', color:'#4c2f27'}
      ,{title: 'Ortografía', theme: 3, icon: 'check-circle', color:'#008f39'}
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
