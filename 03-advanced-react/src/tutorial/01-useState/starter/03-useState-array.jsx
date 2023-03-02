import { data } from '../../../data';
import { useState } from 'react';
const UseStateArray = () => {
  let [name, setName] = useState(data);
  let removeItem = (singleId) => {
    let Newname = name.filter(({ id }) => {
      if (singleId != id) {
        return singleId;
      }
    });
    setName(Newname);
  };
  return (
    <>
      {name.map(({ name, id }) => {
        console.log(id);
        return (
          <>
            <h3 key={id}>{name}</h3>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </>
        );
      })}
      <button
        style={{ display: 'block' }}
        onClick={() => {
          setName([]);
        }}
      >
        remove All
      </button>
    </>
  );
};

export default UseStateArray;
