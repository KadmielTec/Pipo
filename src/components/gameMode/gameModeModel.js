"use strict";
var view;
var params;
var languageSelected;

class GameModeModel {
  constructor(_view) {
    view = _view;
    let self = this;
    params = view;
    let ds = [
      {
        title: "Clásico",
        onPress: () => self.onPressMode("Aprende"),
        language: "es"
      },
      {
        title: "Classic",
        onPress: () => self.onPressMode("Aprende"),
        language: "en"
      }
      //,{title: '?????', onPress:() => self.onPressMode('Contrareloj')}
      //,{title: '?????', onPress:() => self.onPressMode('Libre')}
      //,{title: '?????', onPress:() => self.onPressMode('Competición')}
      //,{title: '?????', onPress:() => self.onPressMode('Retar')}
    ];

    let dsGameMode = [];
    dsGameMode = ds.filter(val => {
      return val.language == params;
    });

    console.log(dsGameMode);

    view.state = {
      dataSource: dsGameMode,
      themeName: params.themeName
    };
  }

  onPressMode(type) {
    view.redirect("question", { theme: params.theme, gametype: type });
  }
}

module.exports = GameModeModel;
