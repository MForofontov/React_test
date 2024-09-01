import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

// Create a context and export it
export const UserContext = createContext();

function ComponentA() {

  const [user, setUser] = useState("John Doe");

  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      {/* Provide the context value and wrap the child component */}
      <UserContext.Provider value={{user}}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;