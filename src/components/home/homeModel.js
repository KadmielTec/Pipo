'use strict'

import React, { Component } from 'react';

var view;

var self;

class HomeModel {
  constructor(_view) {
    view = _view;
    self = this;
    let ds = [
      {title: 'Aprende', onPress: () => {console.log('Modo Aprende')}}
      ,{title: 'Contrareloj', onPress: () => {console.log('Modo Contrareloj')}}
      ,{title: 'Libre', onPress: () => {console.log('Modo Libre')}}
      ,{title: 'Competición', onPress: () => {console.log('Modo Competición')}}
      ,{title: 'Retar', onPress: () => {console.log('Modo Retar')}}
      ,{title: 'Acerca de', onPress: () => {view.redirect('aboutUs')}}
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

module.exports = HomeModel;
