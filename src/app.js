/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
const SUITS = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  BODY.classList.add("background");
  let card = document.createElement("div");
  card.classList.add("poker-card");
  BODY.appendChild(card);

  let randomSuit = SUITS[getRandom(SUITS)];
  let randomValue = VALUES[getRandom(VALUES)];

  let firstSuit = document.createElement("div");
  let cardNumber = document.createElement("div");
  let lastSuit = document.createElement("div");

  let firstSuitValue = document.createTextNode(randomSuit);
  firstSuit.appendChild(firstSuitValue);
  card.appendChild(firstSuit);

  let cardNumberValue = document.createTextNode(randomValue);
  cardNumber.appendChild(cardNumberValue);
  cardNumber.classList.add("card-value");
  card.appendChild(cardNumber);

  let lastSuitValue = document.createTextNode(randomSuit);
  lastSuit.appendChild(lastSuitValue);
  lastSuit.classList.add("last-suit");
  card.appendChild(lastSuit);
};
const getRandom = list => {
  return Math.floor(Math.random() * list.length);
};
