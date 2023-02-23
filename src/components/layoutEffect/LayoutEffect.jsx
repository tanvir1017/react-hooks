import React, { useEffect, useRef, useState } from "react";

export default function LayoutEffect() {
  const [number, setNumber] = useState(0);
  const [screenStyle, setScreenStyle] = useState({});
  const sectionRef = useRef();
  console.log(sectionRef);
  //   useLayoutEffect(() => {
  //     const randomNumber = Math.floor(Math.random() * 500);

  //     for (let i = 0; i <= 100000000; i++) {
  //       if (i === 100000000) setScreenStyle({ paddingTop: `${randomNumber}px` });
  //     }
  //   }, [number]);
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 400);

    for (let i = 0; i <= 100000000; i++) {
      if (i === 100000000) setScreenStyle({ paddingTop: `${randomNumber}px` });
    }
  }, [number]);

  return (
    <>
      <hr />

      <div style={{ position: "relative" }}>
        <section
          ref={sectionRef}
          style={{
            ...screenStyle,
            position: "absolute",
            color: "red",
          }}
        >
          <h1>{number}</h1>
          <button onClick={() => setNumber((prev) => prev + 1)}>+</button>
          <button onClick={() => setNumber((prev) => prev - 1)}>-</button>
        </section>
        <h1>useLayoutEffect</h1>
        <p style={{ fontStyle: "italic" }}>
          useEffect & useLayoutEffect are pretty much same as syntax and
          behavior, they both are work as side effect, Means when maintained
          dependency change or browser render the will have some changes or
          effect. 🤯 But the main difference between both of them is useEffect
          is <strong>asynchronous</strong> & useLayoutEffect is not asynchronous
          it <strong>synchronous</strong>
        </p>
        <p>
          👉 Also useEffect fires after browser repaints the screen means after
          render the browser screen <strong>useEffect</strong> go to do some
          effect.
        </p>
        <p>
          🤔 But instead of fires the effect after browser repaints the screen,{" "}
          <strong>useLayoutEffect</strong> fires the effect before browser
          repaints the screen
        </p>
      </div>
    </>
  );
}
