import React, { useEffect, useState } from "react";

function Scores() {
  const [inputScore, setInputScore] = useState("");

  const [scores, setScores] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputScore(newValue);
  }

  function addScore() {
    setScores((prevScores) => {
      return [...prevScores, inputScore];
    });
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
            return score;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Scores;
