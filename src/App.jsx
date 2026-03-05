import { useState } from "react";

export default function App() {

  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }

  return (
    <div style={{padding:40}}>
      <h1>React Counter</h1>

      <p>Count: {count}</p>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  )
}