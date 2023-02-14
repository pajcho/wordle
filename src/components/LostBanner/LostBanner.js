import React from "react";
import Banner from "../Banner";

function LostBanner({ answer, handleGameRestart }) {
  return (
    <Banner status="sad" action={handleGameRestart} actionText="Restart Game">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
