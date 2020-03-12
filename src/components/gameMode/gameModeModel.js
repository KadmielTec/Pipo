'use strict'

import { fail, hands, history } from '../../commons/sounds';

var view;
var params;

class GameModeModel {
  constructor(_view) {
    view = _view;
    let self = this;
    params = view.get_params();
    let ds = [
      {title: 'Clásico', onPress:() => self.onPressMode('Aprende')}
      ,{title: '?????', onPress:() => self.onPressMode('Contrareloj')}
      ,{title: '?????', onPress:() => self.onPressMode('Libre')}
      ,{title: '?????', onPress:() => self.onPressMode('Competición')}
      ,{title: '?????', onPress:() => self.onPressMode('Retar')}
    ];
    view.state = {
      dataSource: ds,
      themeName: params.themeName
    }
  }

  onPressMode(type){
    view.redirect('question', {theme: params.theme, gametype: type})
    history.stop();
  }
}

module.exports = GameModeModel;
