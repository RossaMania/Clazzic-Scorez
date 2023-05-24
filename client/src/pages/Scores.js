import React, { useEffect, useState } from "react";

function Scores() {
  const [inputScore, setInputScore] = useState("");

  const [scores, setScores] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    console.log(newValue);
    setInputScore(newValue);
  }

  function addScore(score) {
    setScores((prevScores) => {
      return [...prevScores, score];
    });
    console.log("Score added! A winner is you!");
    console.log(score);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={inputScore} />
        <button onClick={addScore}>Submit Score!</button>
      </form>
      <div>
        <ul>
          {scores.map(score => {
            return <li>{score.score}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Scores;
