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
    str_vision_body: "Kadmiel S.A.S. se proyecta para el 2020 ser reconocida por su altísima calidad en desarrollo de software y mantenimiento de computadores y dispositivos móviles a nivel nacional como empresa referencia de vanguardia, innovación y honestidad tanto por el ámbito empresarial como por el de nuestros usuarios y siempre con una ética intachable.",

    str_made_with_love_1 : "hecho con",
    str_made_with_love_2 : "en Kadmiel",

    theme: "TEMAS",
    game_mode: "MODO DE JUEGO"
  },
  "en":{
    login: "Sign In",
    username: "User",
    password: "Password",
    repeatPassword: "Confirm Password",
    register: "Register",
    play: "Play",

    contraReloj:"time trial",
    freeMode: "Free",
    learn: "Learn",

    back: "Go Back",

    str_mision_body: "Kadmiel is a development studio with software and hardware maintenance division which is mainly dedicated to creating custom software with emphasis on the development of video games that leave at least one lesson for life with each game developed.",
    str_mision_title: "Our Mission:",
    str_vision_title: "Our Vision:",
    str_vision_body: "Kadmiel S.A.S. It is projected by 2020 to be recognized for its high quality in software development and maintenance of computers and mobile devices nationwide as a leading company of innovation, innovation and honesty both by the business field and by our users and always with an ethic impeccable.",

    str_made_with_love_1 : "Made with",
    str_made_with_love_2 : "in Kadmiel",

    theme: "THEMES",
    game_mode: "GAME MODE"

  }

});

module.exports = strings;
