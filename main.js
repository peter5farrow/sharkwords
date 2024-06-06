import "./style.css";
import getRandomWord from "./src/randomWord.js";
import setSharkImage from "./src/sharkImage.js";
import { setupWord, isLetterInWord, revealLetterInWord } from "./src/word.js";
import setupGuesses from "./src/guess.js";

document.querySelector("#app").innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();

  setSharkImage(document.querySelector("#shark-img"), numWrong);

  setupWord(document.querySelector("#word-container"), word);

  const handleGuess = (guessEvent, letter) => {
    guessEvent.target.setAttribute("disabled", "true");
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else if (!isLetterInWord(letter) && numWrong < 5) {
      numWrong++;
      setSharkImage(document.querySelector("#shark-img"), numWrong);
    }

    if (numWrong >= 5) {
      for (const eachBut of document.querySelectorAll("#letter-buttons")) {
        eachBut.setAttribute("disabled", "true");
      }
      document.querySelector("#game-status").innerHTML = `<h2>You Lose!</h2>`;
    }

    let isWordComplete = true;
    for (const box of document.querySelectorAll(".letter-box")) {
      if (box.innerText === "") {
        isWordComplete = false;
        break;
      }
    }

    if (isWordComplete && numWrong < 5) {
      for (const eachBut of document.querySelectorAll("#letter-buttons")) {
        eachBut.setAttribute("disabled", "true");
      }
      document.querySelector("#game-status").innerHTML = `<h2>You Win!</h2>`;
      numWrong = 0;
      setSharkImage(document.querySelector("#shark-img"), numWrong);
    }
  };

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
