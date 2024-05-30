import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(1);

  useEffect(() => {
    setCalculation(count * 2);
  }, [count]);
  return (
    <>
      <h1>Count :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <h1>Calculation : {calculation}</h1>
    </>
  );
};

export default UseEffect1;
