import React, { useState } from "react";

function UpdatingJsObject() {
    const [car, setCar] = useState(
        {
        year: 2020,
        make: "Toyota",
        model: "Corolla"
    }
    );
    // Here we update the year, make and model of the car
    // by changing the value of the input field
    // the ...car is the spread operator which copies the existing car object
    // otherwise the car object will be replaced by the new object
    function handleYearChange(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div className="car-container">
            <h1 className="car-h1">Car</h1>
            <div className="car-display">
                <p>Year: {car.year}</p>
                <p>Make: {car.make}</p>
                <p>Model: {car.model}</p>
            </div>
            <div className="car-input-container">
                <input type="number" value={car.year} onChange={handleYearChange} /> <br />
                <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
                <input type="text" value={car.model} onChange={handleModelChange} /> <br />
            </div>
        </div>
    )
}

export default UpdatingJsObject;