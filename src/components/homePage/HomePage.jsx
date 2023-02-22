import React from "react";
import Callback from "../callback/Callback";
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
    </>
  );
}

export default HomePage;
