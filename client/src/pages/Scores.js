import React, { useEffect, useState } from "react";

function Scores() {
  const [inputScore, setInputScore] = useState({
    name: "",
    score:""
  });

  const [scores, setScores] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputScore((prevScore) => {
      return {
        ...prevScore,
        [name]: value
      }
    })
  }

  function addScore(score) {
    console.log(score);
    setScores((prevScores) => {
      return [...prevScores, score];
    });
    console.log("Score added! A winner is you!");
  }

  return (
    <div>
      <form>
        <input name="name" onChange={handleChange} type="text" value={inputScore.name} />
        <input name="score" onChange={handleChange} type="text" value={inputScore.score} />
        <button onClick={addScore}>Submit Score!</button>
      </form>
      <div>
        <ul>
          {scores.map(score => {
            return <li>{score.name} {score.score}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default Scores;
