import React, {useState, useEffect, useRef} from "react";
import "./StopWatch.css";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        // If the stopwatch is running, start the interval
        if (isRunning) {
            // Create a new interval and save its ID
            // The interval updates the elapsed time every 10ms
            // The interval calculates the elapsed time by subtracting the start time from the current time
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [isRunning]);

    function handleStart() {
        // State change triggers re-render
        setIsRunning(true);
        // Ref doesn't trigger re-render
        // Save the current time in milliseconds
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function handleStop() {
        setIsRunning(false);
    }

    function handleReset() {
        // Stop the stopwatch
        setIsRunning(false);
        // Reset the elapsed time
        setElapsedTime(0);
    }

    function formatTime() {
        // Convert elapsed time to a Date object
        let time = new Date(elapsedTime);
        let minutes = time.getMinutes().toString().padStart(2, "0");
        let seconds = time.getSeconds().toString().padStart(2, "0");
        let milliseconds = time.getMilliseconds().toString().padStart(3, "0");

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={handleStart}>Start</button>
                <button className="stop-button" onClick={handleStop}>Stop</button>
                <button className="reset-button" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default StopWatch;