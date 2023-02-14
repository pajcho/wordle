import React from "react";
import Banner from "../Banner";

function WonBanner({ noOfGuesses, handleGameRestart }) {
  return (
    <Banner status="happy" action={handleGameRestart} actionText="Restart Game">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{noOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
