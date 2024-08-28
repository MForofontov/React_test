import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    // c is the current value of count and c + 1 is the new value of count
    // the updater function is called with the current value of count
    // and returns the new value of count which is c + 1
    // Always use updater function when updating the state based on the previous state
    function handleIncrement() {
        setCount(c => c + 1);
    }
    // Here we decrement the count by 1 three times
    // however how the react works it will only decrement the count by 1
    // because the updater function is called with the current value of count
    // and returns the new value of count which is c - 1
    function handleDecrement() {
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
    }
    // Here we reset the count to 0
    // since we dont need the previous state to reset the count
    function handleReset() {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <h1 className="counter-h1">Counter</h1>
            <div className="counter-display">
                <p>Count: {count}</p>
            </div>
            <button className="counter-button" onClick={handleIncrement}>Increment</button>
            <button className="counter-button" onClick={handleDecrement}>Decrement</button>
            <button className="counter-button" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Counter;