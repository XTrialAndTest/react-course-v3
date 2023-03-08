import { useState } from 'react';
// let [chr, setChr] = useState([]);
// let [character, setCharacter] = useState(1);
const UseStateGotcha = () => {
  // let [count, setCount] = useState(1);
  fetch('https://rickandmortyapi.com/api/character')
    .then((resp) => resp.json())
    .then((data) => displayItems(data.results))
    .catch((err) => console.log(err));

  let displayItems = (singleData) => {
    singleData.map((single) => {
      console.log(single.name);
      return (
        <>
          <h1>{single.name}</h1>
        </>
      );
    });
  };

  return (
    <>
      <h1>{displayItems()}</h1>
      <h2>
        <button
          onClick={() => {
            setCount((prev) => {
              console.log(prev);
              let final = prev + 1;
              console.log(final);

              return final;
            });
          }}
        >
          click on me
        </button>
      </h2>
    </>
  );
};

export default UseStateGotcha;
