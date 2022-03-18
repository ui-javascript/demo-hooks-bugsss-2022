import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ChildApp from "./components/ChildApp"

function monitor(pcount, count, text, a) {
  console.log(`props.count: ${pcount}, count: ${count} text: ${text} a: ${a}`);
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        当 props.count 和 count 变化时，上报当前所有数据

      <div className="mt-2">
        父count: {count}
        <button className="ml-5" onClick={() => setCount((c) => c + 1)}>click</button>
      </div>


      <ChildApp 
      monitor={monitor}
        count={count}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
