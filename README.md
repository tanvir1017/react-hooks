# REACT HOOKS 🪝 + ![vit svg](/public/vite.svg)

![React hooks thumbnail for README.md](public/images/reacthooks.png)

---

## Here is the list of available React hooks from their documentation 📃

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

![endless loop without using useCallback and returning a referential value](/public//images/without-useCallback-endless-loop.png)
