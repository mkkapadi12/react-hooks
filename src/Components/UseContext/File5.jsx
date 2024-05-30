import React, { useContext } from "react";
import { UserContext } from "./File1";

const File5 = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>{`Hello ${user} again !`}</h1>
    </div>
  );
};

export default File5;
