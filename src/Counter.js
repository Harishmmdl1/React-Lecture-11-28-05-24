import React, { useCallback, useContext, useMemo, useState } from "react";
import { HarishContext } from "./App";
import List from "./List";

const Counter = () => {
  const { count, setCount } = useContext(HarishContext);
  const [light, setlight] = useState(false);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // const getCount = useCallback(() => {
  //   return [count - 1, count, count + 1];
  // }, [count]);

  // const getCount = useMemo(() => {
  //   return [count - 1, count, count + 1];
  // }, [count]);

  const countValue = useMemo(() => {
    return [count - 1, count, count + 1];
  }, [count]);

  const theme = {
    backgroundColor: light ? "Yellow" : "black",
    color: light ? "red" : "Yellow",
  };
  return (
    <div style={theme}>
      <h2 className="m-5">Welcome to Counter Page</h2>

      <div className="m-5">
        <button className="btn btn-success m-4" onClick={handleIncrement}>
          Increment
        </button>
        <h4>Count : {count}</h4>
        <button className="btn btn-danger m-4" onClick={handleDecrement}>
          Decrement
        </button>
        <br />
        <button
          className="btn btn-secondary m-4"
          onClick={() => setlight(!light)}
        >
          Mode
        </button>
        <List getCount={countValue} />
      </div>
    </div>
  );
};

export default Counter;
