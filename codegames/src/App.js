import './App.css';
import NavBar from './NavBar';
import GameCard from './GameCard';
import Footer from './footer';
import { useEffect, useState } from 'react';
import QuizContainer from './QuizContainer';
import ScoreCard from './ScoreCard';

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState()
  
  const loadQuestions =()=>{
    fetch("http://localhost:3001/questions")
    .then(res=>res.json())
    .then((qs)=>{
      console.log(qs)
    setQuestions(qs)
    })
  }
  useEffect(loadQuestions,[])

  const loadPlayers = () => {
    fetch("http://localhost:3001/players")
      .then((res) => res.json())
      .then((ps) => {
        console.log(ps);
        setPlayers(ps);
      });
  };
  useEffect(loadPlayers, []);
  
  return (
    <div className="App">
      <QuizContainer questions={questions} />
    </div>
  );
}

export default App;
