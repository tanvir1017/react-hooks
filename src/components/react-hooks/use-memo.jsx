import React from "react";
import { useState } from "react";

const fibonacci = (n) => {
  return n < 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

const ReactUseMemo = () => {
  const [userNumber, setUserNumber] = useState("");
  const [randomInput, setRandomInput] = useState("");
  const fibNumber = fibonacci(userNumber);
  return (
    <div>
      <div>
        <label htmlFor="number">Enter a fibonacci seq:</label>
        <br />
        <input
          placeholder="position"
          type="number"
          id="number"
          value={userNumber}
          onChange={(e) => setUserNumber(e.target.value)}
        />
      </div>
      <div>Number: {fibNumber ? fibNumber : "__"}</div>
      <div>
        <label htmlFor="number">Random Input:</label>
        <br />
        <input
          placeholder="position"
          type="text"
          id="number"
          value={randomInput}
          onChange={(e) => setRandomInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReactUseMemo;
