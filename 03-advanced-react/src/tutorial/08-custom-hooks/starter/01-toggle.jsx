import { useState } from 'react';
import { useToggle } from './customeHooks';
const ToggleExample = () => {
  const { name, toggle } = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className='btn' onClick={toggle}>
        toggle
      </button>
      {name && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
