import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [results, setResults] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  console.info({ answer });

  function handleGameRestart() {
    setAnswer(sample(WORDS));
    setResults([]);
    setGameStatus("running");
  }

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
        <WonBanner
          noOfGuesses={results.length}
          handleGameRestart={handleGameRestart}
        ></WonBanner>
      )}
      {gameStatus === "lost" && (
        <LostBanner
          answer={answer}
          handleGameRestart={handleGameRestart}
        ></LostBanner>
      )}
    </>
  );
}

export default Game;
