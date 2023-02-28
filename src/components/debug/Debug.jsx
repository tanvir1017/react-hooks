import * as React from "react";
const { useDebugValue } = React;

export const Debug = () => {
  useDebugValue("Custom label");
  return (
    <>
      <hr />
      <h1>useDebugValue</h1>
      <p>
        This hooks let's provide some informative value in the React dev tools
        hooks section. Where you can see your debug type error, status etc.
      </p>
      <p>It's actually take two parameters </p>
      <pre>1. First one is the value we wanna to send</pre>
      <pre>2. Second one is the anonymous function</pre>
    </>
  );
};
