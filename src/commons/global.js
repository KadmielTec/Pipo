import React, { Component } from 'react';

var current_screen;

var idiom;

class global {

  constructor() {
    current_screen = "";
    idiom = 'spanish'
  }

  set_current_screen(newState){
    try{
      var route = newState;
      while (route.index != undefined) {
        route = route.routes[route.index]
      }
      current_screen = route.routeName.toLowerCase();
    }catch(err){}
  }

  get_current_screen() {
    return current_screen;
  }

  set_idiom(_idiom){
    idiom = _idiom;
  }

  get_idiom(){
    return idiom;
  }

}

const global_ = new global();

module.exports = global_;
