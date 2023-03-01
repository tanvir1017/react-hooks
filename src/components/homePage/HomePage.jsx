import React from "react";
import { Link } from "react-router-dom";
import Callback from "../callback/Callback";
import { Debug } from "../debug/Debug";
import ImperativeHandle from "../imperativeHandle/ImperativeHandle";
import LayoutEffect from "../layoutEffect/LayoutEffect";
import Memo from "../memo/Memo";
import Reducer from "../reducer/Reducer";
import Ref from "../ref/Ref";
import Transitions from "../transitions/Transitions";

function HomePage() {
  return (
    <>
      <h1>React Hooks Mastering 🚀 </h1> <Link to="contacts/2">Contact</Link>
      <p></p>
      <Link to="data">
        <button>Data</button>
      </Link>
      <Callback />
      <Memo />
      <Ref />
      <Reducer />
      <LayoutEffect />
      <ImperativeHandle />
      <Debug />
      <Transitions />
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
