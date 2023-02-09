import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ results }) {
  const emptyResultsCount = NUM_OF_GUESSES_ALLOWED - results.length;

  return (
    <div className="guess-results">
      {results.map((result) => (
        <Guess key={result.id} guess={result}></Guess>
      ))}
      {range(0, emptyResultsCount).map((result, index) => (
        <Guess key={index}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
