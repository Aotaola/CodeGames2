import React, {useState, useEffect} from "react";

const ScoreCard = () => {
  /// funcionality is compleate, all it needs to input automaically
  //is to pass down the props responsible for "playername" and "totalScore"
  const [scores, setScores] = useState([]);
  const [playerName, setPlayerName] = useState(""); //replace empty string with "playername" value
  const [totalScore, setTotalScore] = useState(0); //replace 0 with "totalscore" value
  const [players, setPlayers] = useState([]); //replace empty string with "playername" value

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      playerName,
      totalScore,
    };

    fetch("http://localhost:3000/players", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));
  };

  const loadPlayers = () => {
    fetch("http://localhost:3001/players")
      .then((res) => res.json())
      .then((ps) => {
        console.log(ps);
        setPlayers(ps);
      });
  };
  useEffect(loadPlayers, []);

  return (
    <div>
      <h1>Score Board: </h1>
      {players.map((player) => {
        return (
          <li>
            Player: {player.name} Score: {player.score}/10
          </li>
        );
      })}
   
    </div>
  );
}
export default ScoreCard;