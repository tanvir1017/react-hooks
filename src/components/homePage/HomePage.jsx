import React from "react";
import Callback from "../callback/Callback";
import LayoutEffect from "../layoutEffect/LayoutEffect";
import Memo from "../memo/Memo";
import Reducer from "../reducer/Reducer";
import Ref from "../ref/Ref";

function HomePage() {
  return (
    <>
      <h1>React Hooks Mastering 🚀</h1>
      <Callback />
      <Memo />
      <Ref />
      <Reducer />
      <LayoutEffect />
      <footer style={{ marginBlock: "100px" }}>
        <hr />
        <div>
          <p style={{ textAlign: "italic" }}>Footer</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
