import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    return setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <div>
        <Todos todos={todos} addTodo={addTodo} />
        <hr />
        <div>
          <h2>Count : {count}</h2>
          <button type="button" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default UseCallback;
