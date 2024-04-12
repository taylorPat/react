import { useState } from "react"

function UseStateComp() {
    const [scorePlayer1, setScorePlayer1] = useState(101);
    const [scorePlayer2, setScorePlayer2] = useState(501);

    const addScore = (currentScore, setScore) => {
        let newScore = currentScore - 30;
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
            <button onClick={() => addScore(scorePlayer1, setScorePlayer1)}>Add score</button>
            <p>Player 2: {scorePlayer2}</p>
            <button onClick={() => addScore(scorePlayer2, setScorePlayer2)}>Add score</button>
        
        </div>
    )
}

export default UseStateComp