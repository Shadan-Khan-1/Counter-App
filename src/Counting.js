import React from "react";
import { useState } from "react";
function Counting() {
  const [counter, setCounter] = useState(10);
  //   const [eraser, setErase] = useState('');

  let add = () => {
    setCounter(counter + 1);
  };
  let sub = () => {
    setCounter(counter - 1);
  };
  let reset = () => {
    setCounter(0);
  };

  //   const handleChange = event => {
  //     setErase(event.target.value);
  //   };

  //   let erase = () => {
  //     setErase('');
  //   };

  return (
    <>
      <h1 className="text-center my-5">
        Hello this is a Conuter app {counter}
      </h1>
      <div
        className="d-flex justify-content-center 
                 d-block p-2 text-bg-primary rounded"
      >
        <button
          className="border-dark rounded bg-dark text-white mx-2"
          onClick={add}
          disabled={counter === 20}
        >
          Add + 1
        </button>
        <br />
        <button
          className="border-dark rounded bg-dark text-white mx-2"
          disabled={counter === 0} 
          onClick={sub}
        >
          sub - 1
        </button>
        <button
          className="border-dark rounded bg-dark text-white mx-2"
          disabled={counter === 0}
          onClick={reset}
        >
          Reset
        </button>
      </div>

      
    </>
  );
}
export default Counting;
