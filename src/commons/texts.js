import React, { Component } from "react";
import LocalizedStrings from "react-native-localization";

const strings = new LocalizedStrings({
  es:{
    login: "Iniciar sesión",
    username: "Usuario",
    password: "Contraseña",
    repeatPassword: "Repetir contraseña",
    register: "Registrar",
    play: "jugar",

    contraReloj:"Contrareloj",
    freeMode: "Libre",
    learn: "Aprende",

    back: "Volver",

    str_mision_body: "Kadmiel es un estudio de desarrollo con división de mantenimiento de software y hardware la cual se dedica principalmente a crear software personalizado con énfasis en la elaboración de video juegos que dejen por lo menos una enseñanza para la vida con cada juego desarrollado.",
    str_mision_title: "Nuestra Misión:",
    str_vision_title: "Nuestra Visión:",
    str_vision_body: "Kadmiel S.A.S. proyecta para el 2020 ser reconocida por su altísima calidad en desarrollo de software y mantenimiento de computadores y dispositivos móviles a nivel nacional como empresa referencia de vanguardia, innovación y honestidad tanto por el ámbito empresarial como por el de nuestros usuarios y siempre con una ética intachable.",

  },
  "en":{
    login: "Sign In",
    username: "User",
    password: "Password",
    repeatPassword: "Confirm Password",
    register: "Register",
    play: "Play",

    contraReloj:"Contrareloj",
    freeMode: "Free",
    learn: "Learn",

    back: "Go Back",

    str_mision_body: "Kadmiel es un estudio de desarrollo con división de mantenimiento de software y hardware la cual se dedica principalmente a crear software personalizado con énfasis en la elaboración de video juegos que dejen por lo menos una enseñanza para la vida con cada juego desarrollado.",
    str_mision_title: "Nuestra Misión:",
    str_vision_title: "Nuestra Visión:",
    str_vision_body: "Kadmiel S.A.S. proyecta para el 2020 ser reconocida por su altísima calidad en desarrollo de software y mantenimiento de computadores y dispositivos móviles a nivel nacional como empresa referencia de vanguardia, innovación y honestidad tanto por el ámbito empresarial como por el de nuestros usuarios y siempre con una ética intachable.",
  }

});

module.exports = strings;
