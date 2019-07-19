'use strict'

import React from 'react';
import { ScrollView, Text } from 'react-native';
import Template from '../commons/template';



class AboutUs extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ScrollView style={{flex: 1, paddingTop: 40, paddingHorizontal: 5}}>
        <Text>
          {'Pipo es un pingüino al que le encanta aprender y enseñar lo que sabe sobre muchas cosas de diversos temas que a través de los años ha ido aprendiendo, pero sólo hasta ahora y luego de mucho tiempo de estudio a decidido enseñar o reforzar los temas de las diferentes categorías de preguntas que le han interesado. Pipo es un pingüino al que también le gusta que le enseñen y está dispuesto a aprender incluso sobre otros temas que puede que a ti te interesen.'}
        </Text>
      </ScrollView>
    )
  }

}

module.exports = AboutUs;
