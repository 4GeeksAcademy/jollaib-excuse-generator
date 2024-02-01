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

  function partExcuseGenerator(part) {
    return part[Math.floor(Math.random() * part.length)];
  }

  let whoExcuse = partExcuseGenerator(who);
  let actionExcuse = partExcuseGenerator(action);
  let whatExcuse = partExcuseGenerator(what);
  let whenExcuse = partExcuseGenerator(when);
  let excuse =
    whoExcuse + " " + actionExcuse + " " + whatExcuse + " " + whenExcuse + ".";

  document.getElementById("excuse").innerText = excuse;
};
