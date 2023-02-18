import { useEffect, useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [num] = useState(5);
  const [num1] = useState(4);

  const sum = () => num + num1;
  useEffect(() => {
    console.log("mounted");
    console.log(sum());
    return () => console.log("unmounted");
  }, [sum]);
  return (
    <div>
      <h1>React Hooks</h1>
      <input
        style={{ padding: ".45rem 1.5rem" }}
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p style={{ fontSize: "2.2rem" }}>user are typing = {userInput}</p>
    </div>
  );
}

export default App;
