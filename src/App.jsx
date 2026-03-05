//importing react state. React component, remembers values between renders
import { useState } from "react";

export default function App() {


// this means count → stored value
//setCount → function to change it
//0 → starting value
//setCount built in react function to rerender component automatically
//state changed
//rerender component
//update UI

  const [count, setCount] = useState(0)


 //this is the function which increases the count
  function increase() {
    setCount(count + 1)
  }

  //this is the function which decreases the count
  function decrease() {
    setCount(count - 1)
  }

  return (
    <div style={{padding:40}}>
      <h1>React Counter</h1>

      <p>Count: {count}</p>

{/*call function when button is clicked */}
      <button onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
    </div>
  )
}