'use strict'

import React, { Component } from 'react';

var view;

var self;

var qlength;

class QuestionModel {
  constructor(_view) {
    view = _view;
    self = this;
    let params = view.get_params();
    var question;
    var i = 0;

    question = ["Cual es la capital del departamento de Antioquia?", "Pregunta 2", "Pregunta 3","Pregunta 4"];
    qlength = question.length;

    let ds = [
      {title: 'Envigado', onPress: () => {this.incrementCurrent(false)}}
      ,{title: 'Medellín', onPress: () => {this.incrementCurrent(true)}}
      ,{title: 'La Paz', onPress: () => {this.incrementCurrent(false)}}
      ,{title: 'Bogotá', onPress: () => {this.incrementCurrent(false)}}
    ]

    view.state = {
      qt: question,
      dataSource: ds,
      currentQuestion: question[0],
      currentIndex: 0,
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

  incrementCurrent(correct){
    console.log(correct)
    if(correct){
      console.log('paso por true');
      let index = (view.state.currentIndex < qlength - 1) ? view.state.currentIndex + 1 : 0;
      console.log('index: ', index)
      view.setState({currentQuestion: view.state.qt[index], currentIndex: index, wrongAnswer: false});
    }else view.setState({wrongAnswer: true})
  }

}

module.exports = QuestionModel;
