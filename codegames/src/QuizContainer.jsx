import { useState } from "react";
import GameCard from "./GameCard";

const QuizContainer = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  console.log('question no:', questionNumber)

  if (!questions[questionNumber]) return null 
  return (
    <div>
      <GameCard
        question={questions[questionNumber]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};
export default QuizContainer;
