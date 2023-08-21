/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardNumber = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let cardSuit = ["♦", "♥", "♠", "♣"];

window.onload = function() {};

window.randomNumberGenerator = function randomNumberGenerator(anArray, number) {
  let RandomNumber = Math.floor(Math.random() * number);
  return anArray[RandomNumber];
};

window.suitGenerator = function suitGenerator() {
  let randSuit = randomNumberGenerator(cardSuit, 4);
  const suitPara = document.createElement("p");
  const suitText = document.createTextNode(randSuit);
  suitPara.appendChild(suitText);
  suitPara.classList.add("suitFont");
  document.getElementById("upperSuit").appendChild(suitPara);
  document.getElementById("lowerSuit").appendChild(suitPara);
};

window.numberGenerator = function numberGenerator() {
  let randNumber = randomNumberGenerator(cardNumber, 13);
  const numberPara = document.createElement("p");
  const numberText = document.createTextNode(randNumber);
  numberPara.appendChild(numberText);
  numberPara.classList.add("cardNumberText");
  document.getElementById("cardNumber").appendChild(numberPara);
};

window.turnRed = function turnRed(aTag) {
  document.getElementsByClassName(aTag);
  aTag.classList.add("red");
};
