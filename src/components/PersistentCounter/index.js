import React, { useState, useEffect } from 'react';
import './style.css'

const PersistentCounter = () => {
  // Retrieve the initial value from localStorage, or set it to 0 if not present
  const initialCount = parseInt(localStorage.getItem('counter')) || 0;

  // Initialize the state with the value from localStorage
  const [count, setCount] = useState(initialCount);

  // Update localStorage whenever the count changes
  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  // Handlers for incrementing and decrementing the count
  function increment() {
        setCount(prevCount => prevCount + 1);
    }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
    };

    const backToZero = () => {
    setCount(prevCount => prevCount = 0)
    }

  return (
    <div id="goodthings">
      <h1>Count Your Daily Good Deeds : {count}</h1>
      <button id='one' onClick={increment}>Add</button>
      <button id='two' onClick={decrement}>Subtract</button>
      <button onClick={backToZero}>Reset</button>
    </div>
  );
};

export default PersistentCounter;
