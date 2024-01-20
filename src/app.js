/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function whichExcuseGenerator(part) {
    return part[Math.floor(Math.random() * part.length)];
  }
  let whoExcuse = whichExcuseGenerator(who);
  let actionExcuse = whichExcuseGenerator(action);
  let whatExcuse = whichExcuseGenerator(what);
  let whenExcuse = whichExcuseGenerator(when);
  let excuse =
    whoExcuse + " " + actionExcuse + " " + whatExcuse + " " + whenExcuse + ".";

  document.getElementById("excuse").innerText = excuse;
};
