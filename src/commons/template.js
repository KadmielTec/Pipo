'use strict'

import React, { Component } from 'react';

var self;

class Template extends Component {

    constructor(props) {
      super(props);
      self = this;
    }

    // Acciones del React Navigation

    redirect( name, pass_props = {} ){
      // Navega hacia la ruta especificada.
      self.props.navigation.navigate(name, pass_props);
    }

    replace(name, pass_props = {}){
      // Navega hacia la ruta especificada, desmontando la vista actual.
      self.props.navigation.replace(name, pass_props);
    }

    get_params() {
      // Obtiene los parametros pasados a la ruta actual.
      var { params } = self.props.navigation.state;
      return params;
    }

    go_back() {
      // Desmonta la vista actual y va hacia la anterior.
      var { goBack } = self.props.navigation;
      goBack();
    }

    pop() {
      // Desmonta la vista actual del StackNavigator, dejando activa la anterior.
      var { pop } = self.props.navigation;
      pop();
    }

    popToTop() {
      // Desmonta todas las vistas del StackNavigator, dejando activa unicamente la primera.
      var { popToTop } = self.props.navigation;
      popToTop();
    }

    dispatch(action){
      self.props.navigation.dispatch(action)
    }

}

module.exports = Template;
