import React, {useState, useEffect} from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect with an empty dependency array will run the effect only once after the initial render
  useEffect(() => {
    // Update the time every second using setInterval
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
        // Clear the interval when the component is unmounted
        clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock-container">
        <div className="clock">
            {time}
        </div>
    </div>);
}

export default DigitalClock;