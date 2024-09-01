import React, {useContext} from "react";
import {UserContext} from "./ComponentA";

function ComponentD() {
  // Consume the context value
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user.user}`}</h2>
    </div>
  );
}

export default ComponentD;