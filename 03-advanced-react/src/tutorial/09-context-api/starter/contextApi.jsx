import { useState, useContext, createContext } from 'react';
import { data } from '../../../data';
let Parent = createContext();
let ContextApi = () => {
  let [name, setNames] = useState(data);

  let remove = (theid) =>
    setNames((name) => name.filter(({ id }) => id !== theid));
  return (
    <Parent.Provider value={{ name, remove }}>
      <FirstBorn />
    </Parent.Provider>
  );
};

let FirstBorn = () => (
  <>
    <Child /> <SecondChild />
  </>
);
let SecondChild = () => (
  <>
    <h1>hello World</h1>
  </>
);
let Child = () => {
  let { name, remove } = useContext(Parent);

  return (
    <>
      {name.map(({ name, id }) => {
        return (
          <div className='container' key={id}>
            <h1>{name}</h1>
            <button
              onClick={() => {
                remove(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};
export default ContextApi;
