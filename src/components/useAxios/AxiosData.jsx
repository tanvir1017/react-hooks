import React from "react";
import { Link } from "react-router-dom";
import Jokes from "../jokes/Jokes";

export const AxiosData = () => {
  return (
    <>
      <hr />{" "}
      <div>
        <h1>useAxios Hooks🪝</h1>
        <Jokes />
      </div>
      <Link to="/">
        <button>Home Page</button>
      </Link>
    </>
  );
};
