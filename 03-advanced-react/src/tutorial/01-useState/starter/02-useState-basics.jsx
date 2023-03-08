import { useState } from 'react';

const UseStateBasics = () => {
  let [count, setCount] = useState(0);
  let fucCount = () => {
    setCount(count + 1);
    console.log(count++);
    console.log(count + 1);
    console.log(count);
  };

  return (
    <>
      <h2>{count} </h2>
      <button onClick={fucCount}>click me</button>
    </>
  );
};

export default UseStateBasics;
