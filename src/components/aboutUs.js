'use strict'

import { Body, Button, Container, Header, Left, Right } from "native-base";
import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import Icon from '../commons/components/icon';
import Template from '../commons/template';


class AboutUs extends Template {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor={'#FF7B08'} style={{ backgroundColor: '#FF7B08' }}>
          <Left>
            <Button hasText transparent style={{ height: '100%' }}>
              <Text onPress={this.pop}>Back</Text>
            </Button>
          </Left>
          <Body style={{ alignItems: 'flex-end', justifyContent: 'center', marginRight: 20 }}>
            <Icon name={'pipo'} style={{ color: 'white' }} size={40} />
          </Body>
          <Right />
        </Header>
        <Body style={{ padding: 10 }}>
          <Card
            containerStyle={{ width: 300, borderRadius: 5 }}
          >
            <Text>
              {'Pipo es un pingüino al que le encanta aprender y enseñar lo que sabe sobre muchas cosas de diversos temas que a través de los años ha ido aprendiendo, pero sólo hasta ahora y luego de mucho tiempo de estudio a decidido enseñar o reforzar los temas de las diferentes categorías de preguntas que le han interesado. Pipo es un pingüino al que también le gusta que le enseñen y está dispuesto a aprender incluso sobre otros temas que puede que a ti te interesen.'}
            </Text>
          </Card>
        </Body>
      </Container>
    )
  }

}

module.exports = AboutUs;
