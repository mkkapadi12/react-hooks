import React, { useState } from "react";

const UseMemo1 = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const getNum = () => {
    return setCount((c) => c + 1);
  };

  const countNum = (num) => {
    for (let i = 0; i <= 200000000; i++) {}
    return num;
  };

  const checkData = countNum(count);

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Counter without useMemo hook : </h2>
        <button type="button" onClick={getNum}>
          Counter
        </button>
        <h1>My new number : {checkData}</h1>
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "click me" : "Plz click me"}
        </button>
      </div>
    </>
  );
};

export default UseMemo1;
