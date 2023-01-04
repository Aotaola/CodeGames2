import React, { useState } from "react";
const GameCard = ({ question, questionNumber, setQuestionNumber }) => {
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
    } else {
      setQuestionNumber(questionNumber);
      console.log("incorrect");
      setUserInput("");
      setFormError(false)
      navigator.vibrate(200); // Vibrate for 200ms
    }
    // submit the question and answer to the server
  }

  return (
    <div className="gamecard">
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
    </div>
  );
};

export default GameCard;
