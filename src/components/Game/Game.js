import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([]);

  function saveNewGuess(guess) {
    const letters = checkGuess(guess.value, answer);

    setResults([...results, { ...guess, letters }]);
  }

  function hasWon() {
    return results
      .at(-1)
      ?.letters.every((letter) => letter.status === "correct");
  }

  function hasLost() {
    return results.length === NUM_OF_GUESSES_ALLOWED && !hasWon();
  }

  return (
    <>
      <GuessResults results={results} />

      {hasWon() && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong>
            &nbsp;Got it in&nbsp;
            <strong>{results.length} guesses</strong>.
          </p>
        </div>
      )}

      {hasLost() && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}

      <GuessInput onNewGuess={saveNewGuess} disabled={hasLost() || hasWon()} />
    </>
  );
}

export default Game;
