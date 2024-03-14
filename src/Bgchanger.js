import React, { useState } from "react";

function Bgchanger() {
  const [color, setColor] = useState("green");
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
    <div
      className="d-flex justify-content-between 
                 d-block p-2 text-bg-primary rounded"
    >
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          className="btn text-center"
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red", color: "white" }}
        >
          Red
        </button>
      </div>
      <div>
        <button
          className="btn text-center"
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Blue
        </button>
      </div>
      <div>
        <button
          className="btn text-center"
          onClick={() => setColor("black")}
          style={{ backgroundColor: "black", color: "white" }}
        >
          Black
        </button>
      </div>
      <div>
        <button
          className="btn btn- text-center"
          onClick={() => setColor("pink")}
          style={{ backgroundColor: "pink", color: "white" }}
        >
          Pink
        </button>
      </div>
      <div>
        <button
          className="btn btn- text-center"
          onClick={() => setColor("#031d38")}
          style={{ backgroundColor: "#031d38", color: "white" }}
        >
          Gray
        </button>
      </div>
      <div>
        <button
          className="btn btn- text-center"
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          Orange
        </button>
      </div>
    </div>
  </div>
  );
}

export default Bgchanger;
