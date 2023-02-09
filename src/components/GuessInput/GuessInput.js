import React, { useState } from "react";

function GuessInput({ onNewGuess, disabled }) {
  const [guess, setGuess] = useState("");

  function submitGuess(event) {
    event.preventDefault();

    if (guess.length === 5) {
      console.log({ guess });
      onNewGuess({
        value: guess,
        id: crypto.randomUUID(),
      });
      setGuess("");
    } else {
      window.alert("You have to enter exactly 5 characters");
    }
  }

  return (
    <form onSubmit={submitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        value={guess}
        disabled={disabled}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
