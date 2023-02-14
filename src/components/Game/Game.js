import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function saveNewGuess(guess) {
    const letters = checkGuess(guess.value, answer);

    setResults([...results, { ...guess, letters }]);

    if (guess.value.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (results.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput
        onNewGuess={saveNewGuess}
        disabled={gameStatus !== "running"}
      />

      {gameStatus === "won" && (
        <WonBanner noOfGuesses={results.length}></WonBanner>
      )}
      {gameStatus === "lost" && <LostBanner answer={answer}></LostBanner>}
    </>
  );
}

export default Game;
