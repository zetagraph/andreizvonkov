import { useState } from 'react';

function useToggler(defaultOnValue) {
  const [on, setIsToggledOn] = useState(defaultOnValue);

  function toggle() {
    setIsToggledOn(prev => !prev);
  }

  return [ on, toggle ]
}

export default useToggler;
