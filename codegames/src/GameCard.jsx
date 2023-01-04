import React, { useState } from "react";
const GameCard = ({question, questionNumber, setQuestionNumber}) => {
  const {q, answerKey} = question
    const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
    setIsCorrect(e.target.value === answer);
    setAnswer(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log("submitted")
    if (answer === answerKey){
        setQuestionNumber(questionNumber+1)
        setIsCorrect(!isCorrect)
        console.log("correct")
    } else {
        setQuestionNumber(questionNumber);
        console.log("incorrect");

    }
    // submit the question and answer to the server 
  }

  return (
    <div className="gamecard">
      <form id="msform" onSubmit={handleSubmit}>
        <fieldset>
          <h2 className="fs-title">{q}</h2>
          <h3 className="fs-subtitle">Hint: will be right here</h3>
          <input
            type="text"
            name="fname"
            placeholder="Type Your Code Here!"
            value={userInput}
            onChange={handleChange}
          />
          <input
            type="submit"
            name="next"
            className="next action-button"
            value="Submit"
          />
          {isCorrect !== true && <p>{isCorrect ? "Correct" : "Incorrect"}</p>}
        </fieldset>
      </form>
    </div>
  );
};

export default GameCard;
