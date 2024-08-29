import React, {useState, useEffect} from "react";

function UseEffectExample2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    

    // This will run after each time the component renders, meaning
    // it will create a new event listener every time the component renders
    // window.addEventListener("resize", handleResize);

    // useEffect(function, [])
    useEffect(() => {
        // This will run only when the component is mounted
        // If it has dependencies, it will also run when the dependencies change
        window.addEventListener("resize", handleResize);
        console.log("Mounted");

        // This will run only when the component is unmounted
        // If it has dependencies, it will also run when the dependencies change
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Unmounted");
        }
    }, []); // Only run on mount

    // Multiple useEffects can be used in a single component
    useEffect(() => {
        document.title = `Window size: ${width} x ${height}`;
    }, [width, height]); // On mount and when width or height changes

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    );
}

export default UseEffectExample2;