import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import GameCard from './GameCard';
import Footer from './footer';
import { useEffect, useState } from 'react';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  
  const loadQuestions =()=>{
    fetch("http://localhost:3000/questions")
    .then(res=>res.json())
    .then((questions)=>{
      console.log(questions)
    setQuestions(questions)
    })
  }
  useEffect(loadQuestions,[])
  
  return (
    <div className="App">
      <NavBar />
      <GameCard />
      <Footer />
    </div>
  );
}

export default App;
