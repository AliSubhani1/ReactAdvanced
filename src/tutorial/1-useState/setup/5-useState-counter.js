import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setValue((value = 0))}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          complex increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
