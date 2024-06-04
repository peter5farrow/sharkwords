let word;

function setupWord(element, initWord) {
  word = initWord;
  for (const letter of word) {
    element.innerText += `${_}`;
  }
}

function isLetterInWord(letter) {}

function revealLetterInWord(letter) {}

export { setupWord, isLetterInWord, revealLetterInWord };
