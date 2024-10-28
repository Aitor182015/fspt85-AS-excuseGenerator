/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let intro = "Un/a ";
  let who = [
    "perro de dos cabezas ",
    "pingüino con gabardina ",
    "cacahuete malhumorado ",
    "cowboy con sobrero de paja ",
    "señor con un ojo de cristal ",
    "mago blanco ",
    "muggle "
  ];
  let what = [
    "me pidió fuego ",
    "huyó cobardemente de mi",
    "insinuó que le gustaba ",
    "me lanzó una mirada de odio ",
    "quería que gobernara la tierra media con él ",
    "me lanzó un Expecto Patronum ",
    "huyó en busca del One Piece "
  ];
  let when = [
    "en el fin de los días.",
    "al amanecer del cuarto día.",
    "cuando el reloj del campanario repicara las 12.",
    "hace exactamente 592 segundos.",
    "cuando las ranas críen pelo.",
    "hace más de 10 días."
  ];

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * what.length);
  let random3 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    intro + who[random1] + what[random2] + when[random3];
};
