'use strict'

import { Alert } from 'react-native';
import { fail, hands } from '../../commons/sounds';

let storage = require('../../commons/class/storage');

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
        {pregunta: '¿Cuál es el resultado de la siguiente operación 2+3*5-7?', a: '18', b: '10', c: '-4', d: '-10', correcta:  'b'},
        {pregunta: 'Cuál de las siguientes no es un  propiedad de la Suma', a: 'conmutativa', b: 'asociativa', c: 'transitiva', d: 'distributiva', correcta:  'c'},
        {pregunta: '¿Cuál es el resultado de la siguiente operación (2+3)*(5-7)?', a: '18', b: '10', c: '-4', d: '-10', correcta:  'd'},
        {pregunta: 'Completa la siguiente serie: 0 1 1 2 3 5 8 13 __ 34', a: '15', b: '21', c: '25', d: '18', correcta:  'b'},
        {pregunta: '¿Cuál es el resultado de la siguiente operación (2+3)*5-7?', a: '18', b: '10', c: '-4', d: '-10', correcta:  'a'},
        {pregunta: '¿Cómo se calcula el área de una circunferencia?', a: 'Pi*r', b: 'Pi^2', c: 'Pi*r^2', d: 'Pi^2*r^2', correcta:  'c'},
      ],
      // Ciencia
      [
        {pregunta: '¿Cuál es el símbolo químico del oxígeno?', a: 'O', b: 'H', c: 'OH', d: 'OX', correcta:  'a'},
        {pregunta: 'El símbolo químico del oro es Au', a: 'Falso', b: 'Verdadero', correcta:  'b'},
        {pregunta: 'El Fe (hierro) es un metal de transición', a: 'Falso', b: 'Verdadero', correcta:  'b'},
        {pregunta: 'Un Protón tiene carga Negativa', a: 'Falso', b: 'Verdadero', correcta:  'a'},
        {pregunta: 'El promedio de la gravedad de la tierra está en 10m/s²', a: 'Falso', b: 'Verdadero', correcta:  'a'},
        {pregunta: 'La temperatura superficial de Mercurio es más Calurosa que la de Venus', a: 'Falso', b: 'Verdadero', correcta:  'a'},
        {pregunta: 'Un Electron tiene carga Negativa', a: 'Falso', b: 'Verdadero', correcta:  'b'},
        {pregunta: 'La clorofila le da la pigmentación a las plantas', a: 'Falso', b: 'Verdadero', correcta:  'a'},
      ],
      // Historia
      [
        {pregunta: '¿Qué continente descubrió Cristobal Colón?', a: 'Europa', b: 'América', c: 'India', d: 'China', correcta:  'b'},
        {pregunta: '¿Como se le conoce también a Simón Bolívar?', a: 'El luchador', b: 'La gran esperanza', c: 'El libertador', d: 'El libertino', correcta:  'c'},
        {pregunta: '¿A qué imperio pertenecía la famosa ciudad de machupicchu?', a: 'Azteca', b: 'Maya', c: 'Inca', d: 'Cherokee', correcta:  'c'},
        {pregunta: '¿Qué imperio luchó y venció con 300 soldados?', a: 'Israel', b: 'Grecia', c: 'Ponto', d: 'Egipto', correcta:  'a'},
        {pregunta: '¿Qué imperio luchó y perdió con Aprox 7300 soldados?', a: 'Grecia', b: 'Roma', c: 'Asiria', d: 'Siria', correcta:  'a'},
        {pregunta: '¿Hasta que año Bolivia tuvo mar?', a: '1956', b: '1875', c: '1879', d: 'Bolivia nunca ha tenido mar', correcta:  'd'},
        {pregunta: '¿En qué año se descubrió la penicilina?', a: '1928', b: '1836', c: '1927', d: '1938', correcta:  'a'},
      ],
      // Ortografía
      [
        {pregunta: '¿En qué sílaba se tildan las palabras agúdas?', a: 'Penúltima', b: 'Trasantepenúltima', c: 'Primera', d: 'Última', correcta:  'd'},
        {pregunta: '_____ una mosca en la pared', a: 'Había', b: 'abia', c: 'havia', correcta:  'a'},
        {pregunta: '¿En qué sílaba se tildan las palabras graves?', a: 'Penúltima', b: 'Trasantepenúltima', c: 'Primera', d: 'Última', correcta:  'a'},
        {pregunta: 'Cuántos carros _____ parqueados en el garaje ', a: 'ahí', b: 'hay', c: 'ay', correcta:  'b'},
        {pregunta: '______ una maceta nueva par mi huerta', a: 'necesito', b: 'nesecito', c: 'nececito', correcta:  'a'},
        {pregunta: 'La fuente frente a mi casa está ________', a: 'presiosa', b: 'presioza', c: 'preciosa', correcta:  'c'},
        {pregunta: 'La __________ es el estudio de los suelos', a: 'taquigrafía', b: 'tópografia', c: 'topografía', correcta:  'c'},
        {pregunta: '___ viene un caballero para ayudarnos', a: 'Ahí', b: 'ay', c: 'hay', correcta:  'a'},
      ],
      // Aleatorio
      [
        {pregunta: '¿Cuánto dura el período político de un presidente en Colombia?', a: '6 años', b: '4 años', c: '2 años', d: '8 años', correcta:  'b'},
        {pregunta: '¿Que imperio luchó y venció con 300 soldados?', a: 'Israel', b: 'Grecia', c: 'Ponto', d: 'Egipto', correcta:  'a'},
        {pregunta: 'El símbolo químico del oro es Au', a: 'Falso', b: 'Verdadero', correcta:  'b'},
        {pregunta: '¿Qué continente descubrió Cristobal Colón?', a: 'Europa', b: 'América', c: 'India', d: 'China', correcta:  'b'},
        {pregunta: '¿En qué sílaba se tildan las palabras agúdas?', a: 'Penúltima', b: 'Trasantepenúltima', c: 'Primera', d: 'Última', correcta:  'd'},
        {pregunta: '¿Cuál es el área de una circunferencia?', a: 'Pi*r', b: 'Pi^2', c: 'Pi*r^2', d: 'Pi^2*r^2', correcta:  'c'},
        {pregunta: 'Un Protón tiene carga Negativa', a: 'Falso', b: 'Verdadero', correcta:  'a'},
        {pregunta: 'La __________ es el estudio de los suelos', a: 'taquigrafía', b: 'tópografia', c: 'topografía', correcta:  'c'},
      ],
    ]

    let themeAnswers = [];
    let themeQuestions = [];

    QUESTIONS[params.theme].forEach((question) => {
      if(question == null) return;
      themeQuestions.push({pregunta: question.pregunta, correcta: question.correcta})
      let answers = [];
      if(question.hasOwnProperty('a')) answers.push({title: question.a, value: 'a'});
      if(question.hasOwnProperty('b')) answers.push({title: question.b, value: 'b'});
      if(question.hasOwnProperty('c')) answers.push({title: question.c, value: 'c'});
      if(question.hasOwnProperty('d')) answers.push({title: question.d, value: 'd'});

      themeAnswers.push(answers);
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
      lifes: 3,
      lifesVisible: true,
      active: true,
    }
  }

  incrementCurrent(){
    let index = (view.state.currentIndex < qlength - 1) ? view.state.currentIndex + 1 : -1;
    if(index > -1) view.setState({active: true, currentQuestion: view.state.themeQuestions[index].pregunta, currentAnswers: view.state.themeAnswers[index], currentIndex: index, lifesVisible: true});
    else self.calcPoints();

  }

  async decrementLifes(){
    let lifes = view.state.lifes - 1;
    await view.setState({lifes: lifes});
    view.setState({lifesVisible: true})
    if(lifes <= 0){
      Alert.alert(
        '😔',
        'No te quedan más vidas',
        [
          {text: 'OK', onPress: () => view.pop()},
        ],
        { cancelable: false }
      )
    }else view.setState({active: true});
  }

  calcPoints(){
    let lostLifes = 3 - view.state.lifes;
    let points = view.state.lifes * 100;
    let currentPoints = storage.get_points() || 0;
    storage.store_data({points: points + currentPoints})
    Alert.alert(
      '¡Felicidades!',
      `Vidas perdidas: ${lostLifes}; Peces obtenidos: ${points}`,
      [
        {text: 'OK', onPress: () => view.pop()},
      ],
      { cancelable: false }
    )
  }

  async validateAnswer(selectedOption){
    if(!view.state.active) return;
    await view.setState({lifesVisible: false, active: false});
    let correct = view.state.themeQuestions[view.state.currentIndex].correcta == selectedOption
    if(correct) hands.stop(() => {
      hands.play();
    });
    else  {self.decrementLifes(); fail.play();}
    hands.stop();
    self.incrementCurrent();
  }

}

module.exports = QuestionModel;
