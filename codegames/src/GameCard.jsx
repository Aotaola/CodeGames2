import React, { useState } from "react";
import NavBar from "./NavBar";
const GameCard = ({
  question,
  questionNumber,
  setQuestionNumber,
  timeRemaining,
  name,
  score,
  setScore
}) => {
  const { q, answerKey, hint } = question;
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [formError, setFormError] = useState(false);

  function handleChange(e) {
    setUserInput(e.target.value);
    setIsCorrect(e.target.value === answer);
    setAnswer(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    if (answer === answerKey) {
      setQuestionNumber(questionNumber + 1);
      setIsCorrect(!isCorrect);
      console.log("correct");
      setUserInput("");
      setScore(score + 1);
    } else {
      setQuestionNumber(questionNumber);
      console.log("incorrect");
      setUserInput("");
      setFormError(false);
      navigator.vibrate(200); // Vibrate for 200ms
    }
    // submit the question and answer to the server
  }

  return (
    <div>
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title">{q}</h2>
          <h3 className="fs-subtitle">Hint: {hint}</h3>
          <input
            type="text"
            name="fname"
            placeholder="Type Your Code Here!"
            value={userInput}
            onChange={handleChange}
            style={
              formError
                ? { border: "2px solid green" }
                : { border: "2px solid red" }
            }
          />
          <input
            type="submit"
            name="next"
            className="next action-button"
            value="Submit"
          />
          {isCorrect !== true && <p>{isCorrect ? "Correct!" : "Try Again"}</p>}
        </fieldset>
      </form>
      <div className="timer">Time remaining: {timeRemaining} seconds</div>
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title">Player: {name}</h2>
          <h2 className="fs-title">Score: {score}/10</h2>
        </fieldset>
      </form>
    </div>
  );
};

export default GameCard;
