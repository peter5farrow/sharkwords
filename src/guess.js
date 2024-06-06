const alphabet = "abcdefghijklmnopqrstuvwxyz";

function setupGuesses(element, handleGuess) {
  //makes a button for each letter of the alphabet
  alphabet.split("").forEach((letter) => {
    const btn = document.createElement("button");
    btn.innerText = letter;

    //calls the handleGuess function when a button is clicked and appends the button to the element argument
    btn.addEventListener("click", (e) => handleGuess(e, letter));
    element.append(btn);
  });
}

export default setupGuesses;
