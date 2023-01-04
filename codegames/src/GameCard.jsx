import React, { useState } from 'react';
const GameCard = ()=>{

const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
    const [userInput, setUserInput] = useState("");

function handleChange(e) {
  setUserInput(e.target.value);
  setIsCorrect(e.target.value === answer);
}

function handleSubmit(event) {
event.preventDefault();
// submit the question and answer to the server
}


  return (
    <div className="gamecard">
      <form id="msform">
        <fieldset>
          <h2 class="fs-title">Sample Code Will Be Here</h2>
          <h3 class="fs-subtitle">Hint: will be right here</h3>
          <input
            type="text"
            name="fname"
            placeholder="Type Your Code Here!"
            value={userInput}
            onChange={handleChange}
          />
          <input
            type="button"
            name="next"
            class="next action-button"
            value="Submit"
          />
          {isCorrect !== true && <p>{isCorrect ? "Correct" : "Incorrect"}</p>}
        </fieldset>
      </form>
    </div>
  );

            

}

export default GameCard