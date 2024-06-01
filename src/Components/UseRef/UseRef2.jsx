import React, { useRef } from "react";

const UseRef2 = () => {
  const InputElemet = useRef(null);

  const focusInput = () => {
    // InputElemet.current.style.backgroundColor = "red";
    InputElemet.current.focus();
  };

  return (
    <div>
      <input type="text" ref={InputElemet}></input>
      <button type="button" onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};

export default UseRef2;
