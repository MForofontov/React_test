import React, { useState } from "react";

function UpdateStateArray() {
    const [foods, setFoods] = useState(["Burger", "Fries", "Coke"]);

    function handleAddFood(add) {
        const new_food = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";
        setFoods(f => [...f, new_food]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index ));
    }

    return(
        <div className="food-container">
            <h1 className="food-h1">Food</h1>
            <div className="food-display">
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>
            </div>
            <input type="text" id="food-input" placeholder="Enter food name"/>
            <div>
                <button className="food-button" onClick={handleAddFood}>Add Food</button>
                <button className="food-button" onClick={handleRemoveFood}>Remove Food</button>
            </div>
        </div>
    )
}
export default UpdateStateArray;