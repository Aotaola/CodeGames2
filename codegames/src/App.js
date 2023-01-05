import './App.css';
import NavBar from './NavBar';
import GameCard from './GameCard';
import Footer from './footer';
import { useEffect, useState } from 'react';
import QuizContainer from './QuizContainer';
import ScoreCard from './ScoreCard';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  
  const loadQuestions =()=>{
    fetch("http://localhost:3001/questions")
    .then(res=>res.json())
    .then((qs)=>{
      console.log(qs)
    setQuestions(qs)
    })
  }
  useEffect(loadQuestions,[])
  
  return (
    <div className="App">
      <QuizContainer questions={questions} />
    </div>
  );
}

export default App;
