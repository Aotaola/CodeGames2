import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button className="button-19"
        onClick={() => {
          navigate("/game");
        }}
      >
        START GAME!
      </button>
    </div>
  );
};

export default Home;
