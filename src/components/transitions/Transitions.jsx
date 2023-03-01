import * as React from "react";

const { useTransition, useState } = React;
const Transitions = () => {
  const [counter, setCounter] = useState(0);
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleToDoTransitions = () => {
    //   ? Let me explain, what exactly happening the belows lines. When we call the function the handleToDoTransitions() increment the counter state and set it to the useState. Then it will create an array of 20000 elements of number and fill every number by 1 then map all of the elements and plus it to the counter value after plus the value with counter state it minus the values by index. For huge amount of value calculation it will take some times do this operation and it will block the UI based on an one state.

    //   SOLUTION  =>  How can we fixed it? In react 18 upper version react brings the new hooks called useTransition. It will lets you update the state without blocking the Ui. It does not take any parameters and returns an array wit exactly two items. (01)isPending & (02)startTransition function. The isPending flag tells you whether there is a pending function.Another one(startTransition) function that let's you update the state without ui blocking as a transition

    // COMMENT =>  This hooks you may use frequently. ⚠️ On more thing is wit will renders many. When you see something (state) is sluggish you app or block the ui then you can use it for instant update the state and show the current status by isPending items

    setCounter((prev) => prev + 1);

    startTransition(() => {
      const itemsArray = Array(20000)
        .fill(1)
        .map((el, i) => counter + 20000 - i);
      setItems(itemsArray);
    });
  };
  return (
    <>
      <hr />
      <h1>useTransitions</h1>
      <button
        style={{
          fontSize: "2.5rem",
          padding: "0.45rem 0.85rem ",
        }}
        onClick={handleToDoTransitions}
      >
        {counter}
      </button>
      {isPending ? <p>loading....</p> : null}
      <ul>
        {items.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default Transitions;
