import './App.css';
import NavBar from './NavBar';
import GameCard from './GameCard';
import Footer from './footer';
import { useEffect, useState } from 'react';
import QuizContainer from './QuizContainer';
import ScoreCard from './ScoreCard';
import Home from './Home';

function App() {
  const [questions, setQuestions] = useState([]);
  const [players, setPlayers] = useState()
  
  const loadQuestions =()=>{
    fetch("http://localhost:3001/questions")
    .then(res=>res.json())
    .then((qs)=>{
      console.log("render",qs)
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

  // <Home questions={questions}/>
  
  return (
    <div className="App">
      <QuizContainer questions={questions} />
      <Home />
    </div>
  );
}

export default App;
