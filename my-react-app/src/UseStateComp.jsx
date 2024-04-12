import { useState } from "react"

function UseStateComp() {
    const [scorePlayer1, setScorePlayer1] = useState(101);
    const [scorePlayer2, setScorePlayer2] = useState(501);

    const addScore = (score, currentScore, setScore) => {
        let newScore = currentScore - score;
        if (newScore === 0) {
            newScore = 501
        }
        if (newScore <= 0) {
            newScore = currentScore 
        }
        setScore(newScore)
    }

    return(
        <div>
            <p>Player 1: {scorePlayer1}</p>
            <input type="number" id="inputP1"></input>
            <button onClick={() => addScore(document.getElementById("inputP1").value, scorePlayer1, setScorePlayer1)}>Add score</button>
            <p>Player 2: {scorePlayer2}</p>
            <input type="number" id="inputP2"></input>
            <button onClick={() => addScore(document.getElementById("inputP2").value, scorePlayer2, setScorePlayer2)}>Add score</button>
        
        </div>
    )
}

export default UseStateComp