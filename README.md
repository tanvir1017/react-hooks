# **REACT HOOKS 🪝 + ![vit svg](/public/vite.svg)**

![React hooks thumbnail for README.md](public/images/reacthooks.png)

---

## 🪴 **_Here is the list of available React hooks from their documentation 📃_**

        1. useSTate most frequently use
        2. useCallback
        3. useContext
        4. useDebugValue
        5. useDeferredValue
        6. useEffect
        7. useId
        8. useImperativeHandle
        9. useInsertionEffect
        10. useLayoutEffect
        11. useMemo
        12. useReducer
        13. useRef
        14. useSyncExternalStore
        15. useTransition

---

# useCallback ➡️ `cache the  function between re-renders.`

> `useCallback` function let's you cache the function between many re-renders.

```js
const [userInput, setUserInput] = useState("");
const [result, setResult] = useState(0);
const [num] = useState(5);
const [num1] = useState(4);

const sum = useCallback(() => num + num1, [num1, num]);
useEffect(() => {
  console.log(`New sum result is as usual : ${sum()}`);

  // ? Endless loop! For react is so smart, it can detect the same value and not changed anything because of value is same and prevent the loop. So what's going on here❓We are updating the state by setResult(sum())-(because of sum return a permeative value). When the state change react re-render component. When component re-render() useEffect called and useEffect is looking for [sum] changes and inside of the useEffect we are again change the state by putting sum() inside of setResult(). Again state change when state change react re-render components after re-render useEffect called and blah blah. It could be endless loop like this. But react can detect that value is not changing that's why it's not happing.🚀

  setResult(sum());
}, [sum]);
```

```js
const [result, setResult] = useState(0);
const [num] = useState(5);
const [num1] = useState(4);
// without useCallback
const buildArray = () => [num, num1];

// with useCallback. 🚀 Now it's have the referential equality. It will memoized function before the function gives new value or return new value
const buildArray = useCallback(() => [num, num1], [num, num1]);
useEffect(() => {
  console.log(`New array: ${buildArray()}`);

  // ? Endless loop! For react is so smart, it can detect the same value and not changed anything because of value is same and prevent the loop. So what's going on here❓We are updating the state by setResult(sum())-(because of sum return a permeative value). When the state change react re-render component. When component re-render() useEffect called and useEffect is looking for [sum] changes and inside of the useEffect we are again change the state by putting sum() inside of setResult(). Again state change when state change react re-render components after re-render useEffect called and blah blah. It could be endless loop like this. But react can detect that value is not changing that's why it's not happing.🚀
  setResult(sum());

  // ? What if? if you don't use useCallback in ➡️ buildArray() function. BuildArray function returning a new array and we are set the returned buildArray function array to the result state. So it's going to be an endless rendering loop.
  setResult(buildArray());
}, []);
```

## 🪴 **_Endless reandering loop look like this 🫤_**

![endless loop without using useCallback and returning a referential value](/public//images/without-useCallback-endless-loop.png)

# useMemo ➡️ `cache the expensive calculation or value between re-renders.`

> `useMemo` function let's you cache the expensive function value or expensive calculation between many re-renders.

## 🪴 _**Use case**_ Or _**references**_

- Skipping the expensive recalculations
- Skipping the rendering of components
- Memoizing the dependency of another hook
- Memoizing function

```js
import React, { useEffect, useState } from "react";

const fibo = (n) => {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
};
export default function Memo() {
  const [useNumber, setUseNumber] = useState(0);
  // ?🔖 reference from line number 116 - 126. 🤯  Why this states input will slow❓Cause from react useState we know that when we change any of state in react app the app will render for every changes. So whenever we type a new word or input it set the input to the randomInput state. ➡️ When it's setting the value app will render ➡️ When render the app the fiboNumber variable call the fibonacci function and regenerate the value again. Also we know that fibonacci function is so expensive about performance. So if you give the long value above the  30 the function will goes to expensive in performance. And lag your app instantly.
  const [randomInput, setRandomInput] = useState("");

  const fiboNumber = fibo(useNumber);
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
```

## 🪴 **_so what can we do here with useMemo_** 🤔

```js
// ? What exactly going on here🤔❓  So in this line below we use react hooks called useMemo. Which is memoized the value off fibo function and it will render the application when useNumber dependency will change. So here useMemo element your application lag and do not effect on your application's other actions
const fiboNumber = useMemo(() => fibo(useNumber), [useNumber]);
```

## 🪴 **_Difference view of the useCallback & useMemo👀_**

```js
// ? So what can we do❓ If the expensive function(fibo) is inside the components we can use react hooks called useCallback as we explained it before. We know clearly know that useCallback memoized the function & useMemo memoized the function value. So if you use useCallback hooks when components has some update or state change it should be memoized the expensive function(fibo) & it knows that function has know changes or no new return stuff. It will keep the function as it is and eliminated the laggings form the app
export default function Memo() {
  const fibo = useCallback((n) => {
    return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
  }, []);

  // ? What exactly going on here🤔❓ So in this line below we use react hooks called useMemo. Which is memoized the value off fibo function and it will render the application when useNumber dependency will change. So here useMemo element your application lag and do not effect on your application's other actions
  const fiboNumber = useMemo(() => fibo(useNumber), [useNumber, fibo]);
}
```

# useRef ➡️ `This hook  let's reference you the value that’s not needed for rendering.`

## Syntax

```js
import { useRef } from "react";
const inputRef = useRef(initialValue);
```

# **_when we have to use it_** 👈

1. A value frequently changes and it nots require to render the component's. Like an input field which is changes when you type something or delete something by pressing `backspace`.
2. We can use react hook `useRef` Instead of using the state, when the state set every value when client pressing the key, it will re-render the app in every press. useRef will reference the value and doesn't re-render the components.
3. ⚠️ Also we can manipulate vanilla js `DOM`. So it's not the right way to manipulate dom in react by vanilla js. React came for building `single page application` by thinking in react-full way. So ti's not the good practice to manipulate `dom` using `useRef`

# useReducer ➡️ `useReducer let's you add `reducer` to you component.`

_**And we also know reducer function reduce your work and give you more flexibility. Instead of using a lot of state ! you can handle all of your functional components state in one reducer function**_

## Let's bring an example by code: 😎

```js
import { useReducer } from "react";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }
    case "R-INPUT": {
      return { ...state, inputText: action.payload };
    }
    case "TG-COLOR": {
      return { ...state, color: !state.color };
    }
    default:
      throw new Error("hey there is problem with your action");
  }
};
export default function Reducer() {
  const [state, dispatch] = useReducer(reducerFunc, {
    count: 0,
    inputText: "",
    color: false,
  });

  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [color, setColor] = useState(false);
```

## Or see the example by a picture, *which is also like this code was mentioned before *🥱

![useReducer picture example](/public//images//useReducer.png)
