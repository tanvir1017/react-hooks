import React, { useRef, useState } from "react";

export default function Ref() {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const timerId = useRef(0);

  const handleOnChange = (e) => {
    setRandomInput(e.target.value);
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };
  const resetTimer = () => {
    clearTimer();
    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };
  return (
    <>
      <hr />
      <div>
        <h1>useRef here</h1>
        <input
          style={{ padding: ".45rem 1.5rem" }}
          type="text"
          value={randomInput}
          onChange={handleOnChange}
        />
        <p style={{ textAlgn: "center" }}>
          components renders: {renders.current}
        </p>

        <button onClick={startTimer}>Start</button>
        <button onClick={clearTimer}>Stop</button>
        <button onClick={resetTimer}>Rest</button>
        <h2>Timer : {seconds}</h2>

        <strong style={{ display: "block" }}>
          you are just typing: {randomInput}
        </strong>
      </div>
    </>
  );
}
