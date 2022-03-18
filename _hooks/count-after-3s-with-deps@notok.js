import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(count);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>click</button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
