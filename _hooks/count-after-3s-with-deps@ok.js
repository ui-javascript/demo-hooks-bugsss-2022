import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  // 通过 ref 来记忆最新的 count
  const countRef = useRef(count);
  countRef.current = count;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(countRef.current)
    }, 3000);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  return <button onClick={() => setCount((c) => c + 1)}>click</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
