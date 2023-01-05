import ScoreCard from "./ScoreCard";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
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
      <button
        className="navbutton"
        onClick={() => {
          navigate("/about");
        }}
      >About</button>
      <p></p>
      <button className="navbutton">Home</button>
    </div>
  );
};

export default NavBar;
