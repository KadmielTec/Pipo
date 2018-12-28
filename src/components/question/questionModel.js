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

    //  CÓDIGOS DE LOS TEMAS:
    // Matematicas: 0
    // Ciencia: 1
    // Historia: 2
    // Ortografía: 3
    // Aleatorio: 4

    const QUESTIONS = [
      // Matemáticas
      [
        {pregunta: '¿Cuánto es 1 + 1?', a: '1', b: '3', c: '2', d: '4', correcta:  'c'},
      ],
      // Ciencia
      [
        {pregunta: '¿Cuál es el símbolo químico del oxígeno?', a: 'O', b: 'H', c: 'OH', d: 'Ox', correcta:  'a'},
      ],
      // Historia
      [
        {pregunta: '¿Qué continente descubrió Cristobal Colón?', a: 'Europa', b: 'América', c: 'India', d: 'China', correcta:  'b'},
      ],
      // Ortografía
      [
        {pregunta: '¿En qué sílaba se tildan las palabras agúdas?', a: 'Penúltima', b: 'Trasantepenúltima', c: 'Primera', d: 'Última', correcta:  'd'},
        {pregunta: '¿En qué sílaba se tildan las palabras graves?', a: 'Penúltima', b: 'Trasantepenúltima', c: 'Primera', d: 'Última', correcta:  'a'},
      ],
      // Aleatorio
      [
        {pregunta: '¿Cuánto dura el período político de un presidente en Colombia?', a: '6 años', b: '4 años', c: '2 años', d: '8 años', correcta:  'b'},
      ],
    ]

    let themeAnswers = [];
    let themeQuestions = [];

    QUESTIONS[params.theme].forEach((question) => {
      if(question == null) return;
      themeQuestions.push({pregunta: question.pregunta, correcta: question.correcta})
      themeAnswers.push([{title: question.a, value: 'a'}, {title: question.b, value: 'b'}, {title: question.c, value: 'c'}, {title: question.d, value: 'd'}]);
    });

    qlength = themeQuestions.length;

    view.state = {
      qt: QUESTIONS,
      themeAnswers: themeAnswers,
      themeQuestions: themeQuestions,
      currentQuestion: themeQuestions[0].pregunta,
      currentAnswers: themeAnswers[0],
      currentIndex: 0,
      theme: params.theme,
      gametype: params.gametype,
      wrongAnswer: false,
      lifes: 3,
      lifesVisible: true,
    }
  }

  incrementCurrent(){
      let index = (view.state.currentIndex < qlength - 1) ? view.state.currentIndex + 1 : 0;
      console.log('index: ', index);
      view.setState({currentQuestion: view.state.themeQuestions[index].pregunta, currentAnswers: view.state.themeAnswers[index], currentIndex: index, wrongAnswer: false});
  }

  validateAnswer(selectedOption){
    view.setState({lifesVisible: false});
    let correct = view.state.themeQuestions[view.state.currentIndex].correcta == selectedOption
    if(correct) self.incrementCurrent();
    else view.setState({wrongAnswer: true, lifes: 1})
    view.setState({lifesVisible: true});
  }

}

module.exports = QuestionModel;
