import React, {useState, useEffect} from "react";

function UseEffectExample1() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(function, [dependencies])
    // UseEffect is a hook that allows you to perform side effects in function components
    // 1. useEffect(() => {]) - runs after every render
    // 2. useEffect(() => {], []) - runs only when we mount the component
    // 3. useEffect(() => {], [value]) - runs on mount and when value changes
    useEffect(() => {
        // title will be updated after each count change not color change
        document.title = `You clicked ${count} ${color}`;
    }, [count]); // Only re-run the effect if count changes

    function handleaddClick() {
        setCount(c => c + 1);
    }

    function handlesubtractClick() {
        setCount(c => c - 1);
    }

    function handleColorChange() {
        setColor(color === "green" ? "red" : "green");
    }
    
    return (
        <div>
        <p style={{color}}>You clicked {count} times</p>
        <button onClick={handleaddClick}>Add</button>
        <button onClick={handlesubtractClick}>Subtract</button>
        <button onClick={handleColorChange}>Change Color</button>
        </div>
    );
}

export default UseEffectExample1;