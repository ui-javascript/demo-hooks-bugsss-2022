import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function monitor(count, text, a) {
  console.log(`count: ${count} text: ${text} a: ${a}`);
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [a, setA] = useState("");

  useEffect(() => {
    monitor(count, text, a);
  }, [count]);

  return (
    <div>
        当 props.count 和 count 变化时，上报当前所有数据

      <div className="mt-2">
        count: {count}
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

ReactDOM.render(<App />, document.getElementById("root"));
