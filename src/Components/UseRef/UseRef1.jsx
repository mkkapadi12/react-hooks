import React, { useEffect, useState, useRef } from "react";

const UseRef1 = () => {
  const [inputValue, setInputValue] = useState(" ");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <h1>Count : {count.current}</h1>
    </>
  );
};

export default UseRef1;