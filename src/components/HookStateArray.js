import React, { useState } from 'react';

function HookStateArray() {
  const initialState = [];

  const [items, setItems] = useState(initialState);

  function handleRandomNumber() {
    setItems([
      ...items,
      { id: items.length + 1, number: Math.floor(Math.random() * 10) + 1 }
    ]);
  }

  return (
    <div>
      <button onClick={handleRandomNumber}>New Random Number</button>
      <button onClick={() => setItems(initialState)}>Reset</button>
      <ul>
        {items &&
          items.map(item => (
            <li key={item.id}>
              Turn: {item.id} - Number: {item.number}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HookStateArray;
