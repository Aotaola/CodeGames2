import ScoreCard from "./ScoreCard";
import { useNavigate } from "react-router-dom";

const NavBar = ({setShowGame}) => {
  let navigate = useNavigate();

  return (
    <div className="header">
      {/* <img src="src/logo.svg" id="navimg"/> */}
      <div className="codegames">CodeGames</div>
      <button
        className="navbutton"
        onClick={() => {
          navigate("/scores");
        }}
      >
        High Scores
      </button>
      <p></p>
      <button
        className="navbutton"
        onClick={() => {
          navigate("/");
          setShowGame(true)
        }}
      >
        Home
      </button>
    </div>
  );
};

export default NavBar;
