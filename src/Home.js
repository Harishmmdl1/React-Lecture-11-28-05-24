import React, { useContext }  from "react";
import { HarishContext } from "./App";

const Home = () => {
  const { count } = useContext(HarishContext);

  return (
    <div>
      <h2 className="m-5">Welcome to Home</h2>

      <h4>Counter Value is : {count}</h4>
    </div>
  );
};

export default Home;
