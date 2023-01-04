import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState(""); // added this state variable to store the name
  const [score, setScore] = useState(0); // added this state variable to store the score
  let navigate = useNavigate();

  function handleChange(e) {
    setName(e.target.value);
  }

  const newUser = {
    name: name,
    score: 0,
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`Submitting name: ${name}`);
    // post the name and score to the db.json file
    fetch("http://localhost:3001/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="home">
      {/* added the form element */}
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title">Welcome to the Quiz Game!</h2>
          <label htmlFor="name">
            <input
              placeholder="Enter Your Name Here!"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      <div>
        <button
          className="button-19"
          onClick={() => {
            navigate("/game");
          }}
        >
          START GAME!
        </button>
      </div>
      {/* <button onClick={startGame}>Start Game</button> */}
    </div>
  );
};

export default Home;
