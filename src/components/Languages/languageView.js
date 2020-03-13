"use strict";

import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import {
  Body,
  Button,
  Container,
  Header,
  Left,
  Right,
  Content,
  ListItem,
  Icon,
  Switch
} from "native-base";
import stringsOfLanguages from "../../commons/texts";
import Template from "../../commons/template";
import Icons from "../../commons/components/icon";
import { Flag } from "react-native-svg-flagkit";

class LanguageView extends Template {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    const lang = [
      { shortform: "es", longform: "Español", flag: "ES" },
      { shortform: "en", longform: "English", flag: "EN" }
    ];
    global.lang = lang;
  }

  setText(value) {
    stringsOfLanguages.setLanguage(value);
    console.log(value);
    this.props.navigation.navigate("login", value);
  }

  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor={"#FF7B08"}
          style={{ backgroundColor: "#FF7B08" }}
        >
          <Left />
          <Body
            style={{
              alignItems: "flex-end",
              justifyContent: "center",
              marginRight: 20
            }}
          >
            <Icons name={"pipo"} style={{ color: "white" }} size={40} />
          </Body>
          <Right />
        </Header>
        <Content>
          {global.lang.map((item, key) => (
            <ListItem icon>
              <Left>
                <Button
                  style={{ backgroundColor: "#007AFF" }}
                  key={key}
                  onPress={() => this.setText(item.shortform)}
                >
                  <Flag id={item.flag} />
                </Button>
              </Left>
              <Body>
                <Text>{item.longform}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

module.exports = LanguageView;
