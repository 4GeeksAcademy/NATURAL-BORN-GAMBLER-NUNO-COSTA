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
  let suit = randomNumberGenerator(cardSuit, cardSuit.length);

  const getUpperSuitPara = document.getElementById("upperPara");
  const getLowerSuitPara = document.getElementById("lowerPara");
  const getNumberPara = document.getElementById("numberPara");

  if (suit === "♦" || suit === "♥") {
    const getUpperSuit = document.getElementById("upper");
    let upperSuitChild = getUpperSuit.firstElementChild;
    const getLowerSuit = document.getElementById("lower");
    let lowerSuitChild = getLowerSuit.firstElementChild;

    upperSuitChild.innerHTML = suit;
    lowerSuitChild.innerHTML = suit;

    getUpperSuitPara.className = "suitFont red";
    getLowerSuitPara.className = "suitFont red";
    getNumberPara.className = "suitFont red";
  } else {
    const getUpperSuit = document.getElementById("upper");
    let upperSuitChild = getUpperSuit.firstElementChild;
    const getLowerSuit = document.getElementById("lower");
    let lowerSuitChild = getLowerSuit.firstElementChild;

    upperSuitChild.innerHTML = suit;
    lowerSuitChild.innerHTML = suit;

    getUpperSuitPara.className = "suitFont black";
    getLowerSuitPara.className = "suitFont black";
    getNumberPara.className = "suitFont black";
  }
};

window.numberGenerator = function numberGenerator() {
  const getCardNumber = document.getElementById("cardNumber");
  let cardNumberChild = getCardNumber.firstElementChild;
  let number = randomNumberGenerator(cardNumber, cardNumber.length);
  cardNumberChild.innerHTML = number;
};

window.deal = function deal() {
  suitGenerator();
  numberGenerator();
};
