import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use Ref hook
  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // use callback - optimization
  const passawordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*[]_+{}:";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // use effect - for runnig the password generator
  useEffect(() => {
    passawordGenerator();
  }, [length, numberAllowed, charAllowed, passawordGenerator]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-xl px-4 my-8 text-orange-300 bg-sky-950 py-4">
        <h1 className="text-white text-4xl text-center p-4 my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            id="random-password"
            type="text"
            value={password}
            className="bg-white text-2xl text-sky-950 outline-none w-full py-1  px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-900 text-lg text-white px-3 py-0.5 shrink-0  cursor-pointer"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-md gap-x-4 p-2 justify-between">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="" className="">
              Length : {length}
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="Characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
