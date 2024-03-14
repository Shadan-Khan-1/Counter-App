import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
  const [length, setLenth] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null)

  const passwordGene = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (symbol) str += "!@#$%^&*()_-+?/{}[]~";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    // console.log(pass);
  }, [length, numAllow, symbol, setPassword]);
 
//startcopy password 

const copyPass=(()=>{
  passRef.current?.select()
  // this is select for range 
  // passRef.current?.setSelectionRange(0, 8)
  window.navigator.clipboard.writeText(password)
}) 

//end copy password 
  useEffect(() => {
    passwordGene();
  }, [length, numAllow, symbol, passwordGene]);

  return (
    <>
      <h1 className="text-center">This is password generator</h1>
      <div
        className="card text-center mx-auto "
        style={{ width: "auto", backgroundColor: "lightblue" }}
      >
        <div className="card-body">
          <h5 className="card-title mb-2">Generate Password</h5>
          <div className="my-3">
            <input
              className="rounded"
              type="text"
              value={password}
              ref={passRef}
              placeholder="Copy Your Password"
              readOnly
            />
            <button 
            className="btn btn-primary"
            onClick={copyPass}
            >Copy</button>
          </div>
          <div>
            <input
              type="range"
              min={8}
              max={24}
              value={length}
              onChange={(e) => {
                setLenth(e.target.value);
              }}
            />
            <label> Length: {length}</label>
            <div>
              <input
                type="checkbox"
                defaultChecked={numAllow}
                onClick={() => {
                  setNumAllow((prev) => !prev);
                }}
              />
              <label> Number</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={symbol}
                onClick={() => {
                  setSymbol((prev) => !prev);
                }}
              />
              <label> Symbol</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
