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
  return (
    <>
      <hr />
      <div>
        <h1 style={{ color: `${state.color ? "gold" : "red"}` }}>useReducer</h1>
        <section>
          <input
            style={{ padding: ".45rem 1.5rem" }}
            type="text"
            value={state.inputText}
            onChange={(e) =>
              dispatch({ type: "R-INPUT", payload: e.target.value })
            }
          />
          <p>
            <strong>You are typing: {state.inputText}</strong>
          </p>

          <div>
            <button onClick={() => dispatch({ type: "TG-COLOR" })}>
              Color
            </button>
          </div>
          <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
              Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
              {" "}
              Decrement
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
