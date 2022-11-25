import React, { useEffect, useState } from 'react';

// {
//     "_id": "637fb4cad649299bc0f8df4a",
//     "title": "Contra",
//     "releaseYear": "1987",
//     "availablePlatforms": [
//         "PlayStation 4",
//         "Nintendo Switch",
//         "XBox"
//     ],
//     "__v": 0
// }


function Games() {
  const [games, setGames] = useState([]);

  useEffect(function() {
    fetch("/api/games").then((data) => {
      data.json().then((gamesAsJSON) => {
        setGames(gamesAsJSON);
      });
    });
  }, [])

  if(games.length === 0) {
    return "No Games!"
  }

  return (
    <ul>
      {games.map((game) => {
        return <li>{game.title} - {game.releaseYear}</li>
      })}
    </ul>
  );
};
export default Games;