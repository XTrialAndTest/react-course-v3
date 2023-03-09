import { useState } from 'react';
export let useToggle = (df) => {
  let [name, setName] = useState(df);
  let toggle = () => {
    setName(!name);
  };
  return { name, toggle };
};
