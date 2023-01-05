import React, {useState} from "react";

const ScoreCard = () => {

    /// funcionality is compleate, all it needs to input automaically 
    //is to pass down the props responsible for "playername" and "totalScore"
    const [scores, setScores] = useState([]);
    const [playerName, setPlayerName] = useState('');//replace empty string with "playername" value
    const [totalScore, setTotalScore] = useState(0);//replace 0 with "totalscore" value
  
    const handleSubmit = event => {
      event.preventDefault();
  
      const data = {
        playerName,
        totalScore
      };
  
      fetch("http://localhost:3000/players", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error));}

        return (
            <form onSubmit={handleSubmit}>
              <label>
                Player Name:
                <input type="text" value={playerName} onChange={event => setPlayerName(event.target.value)} />
              </label>
              <br />
              <label>
                Total Score:
                <input type="number" value={totalScore} onChange={event => setTotalScore(event.target.value)} />
              </label>
              <br />
              <button type="submit">Add Score</button>
              <br />
              <br />
              <table>
                <thead>
                  <tr>
                    <th>Player Name</th>
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map(score =>
                    <tr>
                      <td>{score.playerName}</td>
                      <td>{score.totalScore}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </form>
          ); }
export default ScoreCard;