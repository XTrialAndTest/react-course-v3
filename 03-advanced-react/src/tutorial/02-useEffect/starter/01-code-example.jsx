import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);
  let fetchData = async () => {
    let response = await fetch('https://rickandmortyapi.com/api/character');
    let data = await response.json();
    console.log(data.restults);
  };
  fetchData();
  return;
};
export default CodeExample;
