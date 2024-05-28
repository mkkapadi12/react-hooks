import React, { useState } from "react";

const UseStateObject = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "mustang",
    year: "1964",
    color: "red",
  });

  //   const updateState = () => {
  //     setCar((previousState) => {
  //       return { ...previousState, color: "blue" };
  //     });
  //   };

  return (
    <>
      <h1>Hello</h1>
      <div>{car.brand}</div>
      <div>{car.model}</div>
      <div>{car.year}</div>
      <div>{car.color}</div>
      <button
        type="button"
        onClick={() =>
          setCar((ele) => {
            return { ...ele, color: "blue" };
          })
        }
      >
        Blue
      </button>
    </>
  );
};

export default UseStateObject;
