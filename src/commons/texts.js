import React, { Component } from 'react';

let msg_login_es = {
  login: 'Iniciar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  repeatPassword: 'Repetir contraseña',
  register: 'Registrar',
  play: 'jugar'
}

let msg_home_es = {
  contraReloj:'Contrareloj',
  freeMode: 'Libre',
  learn: 'Aprende'
}

let msg_themes_es = {
  str_title_default: ""
}

let msg_questions_es = {
  str_title_default: ""
}

let msg_about_es = {
  str_mision_body: "Kadmiel es un estudio de desarrollo con división de mantenimiento de software y hardware la cual se dedica principalmente a crear software personalizado con énfasis en la elaboración de video juegos que dejen por lo menos una enseñanza para la vida con cada juego desarrollado.",
  str_mision_title: "Nuestra Misión:",
  str_vision_title: "Nuestra Visión:",
  str_vision_body: "Kadmiel S.A.S. proyecta para el 2020 ser reconocida por su altísima calidad en desarrollo de software y mantenimiento de computadores y dispositivos móviles a nivel nacional como empresa referencia de vanguardia, innovación y honestidad tanto por el ámbito empresarial como por el de nuestros usuarios y siempre con una ética intachable.",
}

var msg_login = msg_login_es;
var msg_home = msg_home_es;
var msg_themes = msg_themes_es;
var msg_questions = msg_questions_es;
var msg_about = msg_about_es;

module.exports = {
  msg_login
  ,msg_home
  ,msg_themes
  ,msg_questions
  ,msg_about
};
