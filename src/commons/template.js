'use strict'

import React, { Component } from 'react';

var self;

class Template extends Component {

    constructor(props) {
      super(props);
      self = this;
    }

    redirect( name, pass_props = {} ){
      self.props.navigation.navigate(name, pass_props);
    }

    replace(name, pass_props = {}){
      self.props.navigation.replace(name, pass_props);
    }

    get_pass_props() {
      var { params } = self.props.navigation.state;
      return params;
    }

    go_back() {
      var { goBack } = self.props.navigation;
      goBack();
    }

    pop() {
      var { pop } = self.props.navigation;
      pop();
    }

    popToTop() {
      var { popToTop } = self.props.navigation;
      popToTop();
    }

}

module.exports = Template;
