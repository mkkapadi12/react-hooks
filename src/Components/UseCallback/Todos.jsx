import React, { memo } from "react";

const Todos = ({ addTodo, todos }) => {
  console.log("Child rendering...!");
  return (
    <div>
      <h2>Todos : </h2>
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + " " + (index + 1)}</p>;
      })}
    </div>
  );
};

export default memo(Todos);
