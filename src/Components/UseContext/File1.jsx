import React, { createContext, useState } from "react";
import File2 from "./File2";

export const UserContext = createContext();

const File1 = () => {
  const [user, setUser] = useState("Mayur");
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{`Hello ${user}`}</h1>
        <button
          onClick={() => setUser("Raj")}
          onDoubleClick={() => setUser("Nirav")}
        >
          Change User
        </button>
        <File2 />
      </div>
    </UserContext.Provider>
  );
};

export default File1;
