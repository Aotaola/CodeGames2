import { useState, useEffect } from "react";
import GameCard from "./GameCard";

const QuizContainer = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10); // added this line

  useEffect(() => {
    // start the timer when the component mounts or updates
    const timer = setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
      setTimeRemaining(10); // reset the timer
    }, 10000); // 10 seconds in milliseconds
    // clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [questionNumber]);

  // added this effect to update the timer display
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000); // 1 second in milliseconds
    return () => clearTimeout(timer);
  }, [timeRemaining]);

  if (!questions[questionNumber]) return null 
  return (
    <div>
      {/* added this element to display the timer */}
      <div className="timer" style={{ position: "absolute", top: 0, right: 0 }}>
        Time remaining: {timeRemaining} seconds
      </div>
      <GameCard
        question={questions[questionNumber]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};
export default QuizContainer;
