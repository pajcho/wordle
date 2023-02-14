import React from "react";
import Banner from "../Banner";

function WonBanner({ noOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{noOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
