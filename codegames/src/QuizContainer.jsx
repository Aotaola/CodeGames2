const QuizContainer = () => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("answer");
  const [isCorrect, setIsCorrect] = useState(true);
  function handleChange(e) {
    setUserInput(e.target.value);
    setIsCorrect(e.target.value === answer);
  }
  return (
    <div>
      <h2>QUESTIONS BAR</h2>
      <input
        fluid
        label="questions"
        placeholder="questions"
        value={userInput}
        onChange={handleChange}
      />
      {isCorrect !== true && <p>{isCorrect ? "Correct" : "Incorrect"}</p>}
    </div>
  );
};
export default QuizContainer;
