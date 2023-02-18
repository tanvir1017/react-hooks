import React, { useEffect, useMemo, useState } from "react";

const fibo = (n) => {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
};
export default function Memo() {
  const [useNumber, setUseNumber] = useState(0);
  // ? Why this states input will slow❓Cause from react useState we know that when we change any of state in react app the app will render for every changes. So whenever we type a new word or input it set the input to the randomInput state. ➡️ When it's setting the value app will render ➡️ When render the app the fiboNumber variable call the fibonacci function and recalculate the value every letter you type or every letter you delete. Also we know that fibonacci function is so expensive about performance. So if you give the long value above the  30 the function will goes to expensive in performance. And lag your app instantly.So here is the situation are enoughs handle by 📝 useMemo.
  const [randomInput, setRandomInput] = useState("");

  // ? What exactly going on here🤔❓  So in this line below we use react hooks called useMemo. Which is memoized the value off fibo function and it will render the application when useNumber dependency will change. So here useMemo element your application lag and do not effect on your application's other actions
  const fiboNumber = useMemo(() => fibo(useNumber), [useNumber]);
  useEffect(() => {
    console.log("fibonacci : ", fiboNumber);
    console.log("random input are taken");
  }, [fiboNumber]);
  return (
    <>
      <hr />
      <h1>useMemo 📝</h1>
      <div>
        <label htmlFor="fibonacci-number">Fibonacci number : </label>
        <input
          style={{ padding: ".45rem 1.5rem" }}
          type="text"
          value={useNumber}
          onChange={(e) => setUseNumber(e.target.value)}
        />
        <p style={{ textAlign: "center" }}>
          Fibonacci number is: {fiboNumber | "--"}
        </p>
      </div>
      <div>
        <label htmlFor="fibonacci-number">Random Input : </label>
        <input
          style={{ padding: ".45rem 1.5rem" }}
          type="text"
          value={randomInput}
          onChange={(e) => setRandomInput(e.target.value)}
        />
        <p style={{ textAlign: "center" }}>
          Given random input is : {randomInput}
        </p>
      </div>
    </>
  );
}
