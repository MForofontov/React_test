import React, {useState, useEffect, useRef} from "react";

function UseRefExample() {
    // Create a ref, object with only one property called current
    // The value of current can be changed and it will persist between renders
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("Component rendered");
    });
    // When clicked the component will not re-render
    // When using UseState the component will re-render
    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.background = "yellow";
        inputRef2.current.style.background = "";
        inputRef3.current.style.background = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.background = "yellow";
        inputRef1.current.style.background = "";
        inputRef3.current.style.background = ""
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.background = "yellow";
        inputRef1.current.style.background = "";
        inputRef2.current.style.background = ""
    }
    return (
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3} />
        </div>
    );
}

export default UseRefExample;