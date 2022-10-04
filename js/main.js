"use strict";

const textArea = document.querySelector(".js-input");
const words = document.querySelector(".js-words");
const char = document.querySelector(".js-chars");

let wordsCounter = 0;
let charCounter = 0;

function howManyWords() {
  const text = textArea.value.split(" ");
  wordsCounter = text.length;
  words.innerHTML = wordsCounter;
}
function howManyChars() {
  const blanks = /[ ]+/g;
  const text = textArea.value.replace(blanks, "");
  const newText = text.split("");
  charCounter = newText.length;
  char.innerHTML = charCounter;
}
function handleTextArea() {
  howManyChars();
  howManyWords();
}

textArea.addEventListener("keyup", handleTextArea);
