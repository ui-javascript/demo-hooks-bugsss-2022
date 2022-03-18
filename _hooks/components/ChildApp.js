import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";



function App(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [a, setA] = useState("");

  useEffect(() => {
    props.monitor(props.count, count, text, a);
  }, [props.count, count]);

  return (
    <div>
    

      <div className="mt-2">
        子count: {count}
        <button className="ml-5" onClick={() => setCount((c) => c + 1)}>click</button>
      </div>

      <div className="mt-2">
        <input
          placeholder="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mt-2">
        <input
          placeholder="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
