import React, { useCallback, useEffect, useState } from "react";

export default function Callback() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState(0);
  const [num] = useState(5);
  const [num1] = useState(10);

  const sum = useCallback(() => num + num1, [num, num1]);
  const buildArray = useCallback(() => [num, num1], [num, num1]);

  // COMMENT  : useEffect here
  useEffect(() => {
    console.log(`New array: ${buildArray()}`);

    // ? Endless loop! For react is so smart, it can detect the same value and not changed anything because of value is same and prevent the loop. So what's going on here❓We are updating the state by setResult(sum())-(because of sum return a permeative value). When the state change react re-render component. When component re-render() useEffect called and useEffect is looking for [sum] changes and inside of the useEffect we are again change the state by putting sum() inside of setResult(). Again state change when state change react re-render components after re-render useEffect called and blah blah. It could be endless loop like this. But react can detect that value is not changing that's why it's not happing.🚀
    setResult(sum());

    // ? What if? if you don't use useCallback in ➡️ buildArray() function. BuildArray function returning a new array and we are set the returned buildArray function array to the result state. So it's going to be an endless rendering loop.
    setResult(buildArray());
    console.log(`New array builded: ${buildArray()}`);
  }, [buildArray, sum]);
  return (
    <>
      <hr />
      <div>
        <h1>useCallback 🤙</h1>
        <input
          style={{ padding: ".45rem 1.5rem" }}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <p style={{ fontSize: "2.2rem" }}>user are typing = {userInput}</p>
      </div>
    </>
  );
}
