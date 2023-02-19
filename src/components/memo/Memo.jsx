import React, { useCallback, useEffect, useMemo, useState } from "react";

const makeArray = () => {
  for (let i = 0; i <= 1000000000; i++) {
    // do something big or expensive
    // console.log(i);
  }
  return ["Tanvir", "Hossain"];
};

export default function Memo() {
  const [useNumber, setUseNumber] = useState(0);
  // ? Why this states input will slow❓Cause from react useState we know that when we change any of state in react app the app will render for every changes. So whenever we type a new word or input it set the input to the randomInput state. ➡️ When it's setting the value app will render ➡️ When render the app the fiboNumber variable call the fibonacci function and recalculate the value every letter you type or every letter you delete. Also we know that fibonacci function is so expensive about performance. So if you give the long value above the  30 the function will goes to expensive in performance. And lag your app instantly.So here is the situation are enoughs handle by 📝 useMemo.
  const [randomInput, setRandomInput] = useState("");

  // ? What if we declare the fibo function (which is  return expensive values) inside of the components and pass it as the dependency of useMemo🤔❓ The answer is: our app must be getting lag as it was before use useMemo. Because when we use useMemo it just memoized the value of fibonacci function, it's not memoized or cache only the function. So when we give the input to the random input field the components re-render and the function re-return an expensive value.  And fibo(f) dependency of useMemo that's why when function has change or return something it will re-render the component based on the dependency👎.

  // ? So what can we do❓ If the expensive function(fibo) is inside the components we can use react hooks called useCallback as we explained it before. We know clearly know that useCallback memoized the function & useMemo memoized the function value. So if you use useCallback hooks when components has some update or state change it should be memoized the expensive function(fibo) & it knows that function has know changes or no new return stuff. It will keep the function as it is and eliminated the laggings form the app
  const fibo = useCallback((n) => {
    return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
  }, []);

  // ? What exactly going on here🤔❓  So in this line below we use react hooks called useMemo. Which is memoized the value off fibo function and it will render the application when useNumber dependency will change. So here useMemo element your application lag and do not effect on your application's other actions
  const fiboNumber = useMemo(() => fibo(useNumber), [useNumber, fibo]);

  const expensiveArrayByLoop = useMemo(() => makeArray(), []);
  // const expensiveArrayByLoop = makeArray();

  useEffect(() => {
    console.log("expensive array");
  }, [expensiveArrayByLoop]);
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
