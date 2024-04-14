import { useState } from "react"

function UseStateComp() {
    const startingPoints = 101
    const [pointsP1, setPointsP1] = useState(startingPoints);
    const [scoreP1, setScoreP1] = useState("");

    
    const [pointsP2, setPointsP2] = useState(startingPoints);
    const [scoreP2, setScoreP2] = useState("");

    function changePointsP1(e) {
        setScoreP1(e.target.value)
    }

    function changePointsP2(e) {
        setScoreP2(e.target.value)
    }

    const addScore = (score, currentPoints, setPoints, setScore) => {
        let newScore = currentPoints - score;
        if (newScore === 0) {
            newScore = 501
        }
        if (newScore <= 0) {
            newScore = currentPoints 
            window.alert("Watch out!")
        }
        setPoints(newScore)
        setScore("");
    }

    return(
        <div className="Score-board">
            <div className="Score-player">
                <p>Player 1</p>
                <p>{pointsP1}</p>
                <input type="number" value={scoreP1} placeholder="Enter points" onChange={changePointsP1}></input>
                <button onClick={() => addScore(scoreP1, pointsP1, setPointsP1, setScoreP1)}>Add score</button>
            </div>
            <div className="Score-player">
                <p>Player 2</p>
                <p>{pointsP2}</p>
                <input type="number" value={scoreP2} placeholder="Enter points" onChange={changePointsP2}></input>
                <button onClick={() => addScore(scoreP2, pointsP2, setPointsP2, setScoreP2)}>Add score</button>
            </div>
        </div>
    )
}

export default UseStateComp