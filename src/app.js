/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log(randomNumberGenerator(cardNumber, 13));
  console.log(randomNumberGenerator(cardSuit, 4));
};

window.randomNumberGenerator = function randomNumberGenerator(anArray, number) {
  let RandomNumber = Math.floor(Math.random() * number);
  return anArray[RandomNumber];
};

  window.suitGenerator = function suitGenerator() {
  let randSuit = randomNumberGenerator(cardSuit, 4);
  let getSuitText = document.getElementById("#upperSuitText");
  let suitText = document.createTextNode(randSuit);
  getSuitText.appendChild(suitText);


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
