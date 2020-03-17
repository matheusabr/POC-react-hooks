import React, { useState } from 'react';

/**
 * -- useState() --
 * 1. Define a state variable
 * 2. Pass its initial value (Ex: 0)
 * 3. Update the state variable value by user interaction
 * 4. Limit to 0 plus values
 */
function HookCounter() {
  const [count, setCount] = useState(0);

  function handleDecrementCounter() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <button onClick={handleDecrementCounter}>-</button>
      <span>Count {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default HookCounter;