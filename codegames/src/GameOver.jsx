import NavBar from "./NavBar"

const GameOver = ({name, score})=> {
    return (
        <div className="gameover confetti">
            <h1>GAME OVER</h1>
            <h1>Great job! You scored {score}/10! </h1>

        </div>
    )
}

export default GameOver