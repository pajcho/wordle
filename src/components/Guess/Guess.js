import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((index) => (
        <span key={index} className={`cell ${guess?.letters[index].status}`}>
          {guess?.value[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
