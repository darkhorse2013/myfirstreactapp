import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1>My First React App</h1>
      <p>This button proves React is working:</p>

      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}