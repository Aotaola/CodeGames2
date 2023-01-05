import { useState, useEffect } from "react";
import GameCard from "./GameCard";
import NavBar from "./NavBar";

const QuizContainer = ({ questions, name, setName }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10); // added this line

  useEffect(() => {
    // start the timer when the component mounts or updates
    const timer = setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
      setTimeRemaining(10); // reset the timer
    }, 100000); // 10 seconds in milliseconds
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

  if (!questions[questionNumber]) {
    return <div>"Game Over"</div>;
  }

  return (
    <div>
      <NavBar />
      {/* added this element to display the timer */}
      <GameCard
        question={questions[questionNumber]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        timeRemaining={timeRemaining}
      />
      <div></div>
    </div>
  );
};
export default QuizContainer;
