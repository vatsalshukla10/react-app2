import React, { useState } from "react";
import "./styles.css";

const fruitDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana"
};

const foodi = Object.keys(fruitDictionary);

export default function App() {
  const [food, setFood] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputFood = event.target.value;
    setFood(inputFood);

    if (inputFood in fruitDictionary) {
      setMeaning(fruitDictionary[inputFood]);
    } else {
      setMeaning("failure to recognise this fruit");
    }
  }

  function emojiClickHandler(inputFood) {
    setMeaning(fruitDictionary[inputFood]);
  }

  return (
    <div className="App">
      <h1>FRUITSS</h1>
      <input
        onChange={changeHandler}
        value={food}
        placeholder={"Search your fruits"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {food} </h2>
      <h3> {meaning} </h3>
      {foodi.map((food) => (
        <span
          onClick={() => emojiClickHandler(food)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {food}{" "}
        </span>
      ))}
    </div>
  );
}
