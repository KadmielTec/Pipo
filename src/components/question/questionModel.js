'use strict'

import React, { Component } from 'react';

var view;

var self;

class QuestionModel {
  constructor(_view) {
    view = _view;
    self = this;
    let params = view.get_params();
    
    let ds = [
      {title: 'Opcion 1', onPress: () => {console.log('Correcto ')}}
      ,{title: 'Opcion 2', onPress: () => {console.log('Incorrecto')}}
      ,{title: 'Opcion 3', onPress: () => {console.log('Incorrecto')}}
      ,{title: 'Opcion 4', onPress: () => {console.log('Incorrecto')}}
    ]
    view.state = {
      dataSource: ds,
      gamemode: params.gamemode,
      gametype: params.gametype,
    }
  }

  Option1(){
    console.log('Seleccionada Opcion 1');
  }

  Option2(){
    console.log('Seleccionada Opcion 2');
  }

  Option3(){
    console.log('Seleccionada Opcion 3');
  }

  Option4(){
    console.log('Seleccionada Opcion 4');
  }

}

module.exports = QuestionModel;
