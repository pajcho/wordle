import React, { useState } from "react";

function GuessInput({ onNewGuess, disabled }) {
  const [guess, setGuess] = useState("");

  function submitGuess(event) {
    event.preventDefault();

    if (guess.length === 5) {
      onNewGuess({
        value: guess.toUpperCase(),
        id: crypto.randomUUID(),
      });
      setGuess("");
    }
  }

  return (
    <form onSubmit={submitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        value={guess}
        disabled={disabled}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      />
    </form>
  );
}

export default GuessInput;
