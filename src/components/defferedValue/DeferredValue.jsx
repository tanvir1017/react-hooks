import * as React from "react";
import { Link } from "react-router-dom";

const { useState, useTransition, useDeferredValue, useEffect, useRef } = React;

const bigArray = [...Array(20000).keys()];

const DeferredValue = () => {
  const [items, shoItems] = useState(bigArray);
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const deferredValue = useDeferredValue(inputValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    startTransition(() => {
      console.log(deferredValue);
      const filteredValue = bigArray.filter((items) =>
        items.toString().includes(deferredValue)
      );
      shoItems(filteredValue);
    });
  }, [deferredValue]);

  const content = (
    <section style={isPending ? { opacity: 0.4 } : null}>
      <p>Search for: {deferredValue || "All"}</p>
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );

  return (
    <>
      <Link to={"/"}>
        <button
          style={{
            padding: "0.5rem 3.5rem",
            fontSize: "2rem",
            borderRadius: ".5rem",
          }}
        >
          Back to home
        </button>
      </Link>

      <input
        style={{
          display: "block",
          margin: "3rem 0rem",
          padding: "0.6rem",
        }}
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />

      {content}
    </>
  );
};

export default DeferredValue;
