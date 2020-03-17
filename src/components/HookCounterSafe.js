import React, { useState } from 'react';

/**
 * -- useState() --
 * 1. Define a initial value
 * 2. Define a state variable
 * 3. Pass its initial value (Ex: 0)
 * 4. Update the state variable value by user interaction
 * 5. Limit to 0 plus values
 * 6. Update 10 times the state variable in a loop 
 */
function HookCounterSafe() {
  const [count, setCount] = useState(0);

  function handleDecrementCounter() {
    if (count > 0) {
      setCount(prevValue => prevValue - 1)
    }
  }

  function handleIncrementTen() {
    for (let index = 0; index < 10; index++) {
      setCount(prevValue => prevValue + 1)
    }
  }

  return (
    <div>
      <button onClick={handleDecrementCounter}>-</button>
      <span>Count {count}</span>
      <button onClick={() => setCount(prevValue => prevValue + 1)}>+</button>
      <button onClick={handleIncrementTen}>+10</button>
    </div>
  )
}

export default HookCounterSafe;