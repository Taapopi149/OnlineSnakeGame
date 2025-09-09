import React, { useEffect, useState, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './Frame.css'
import GameLogic from '../GameLogic/GameLogic'
import GameOver from '../GameOver/GameOver'
import Leaderboard from '../Leaderboard/leaderboard.jsx'

const Frame = () => {

  const canvasRef = useRef(null)
  const canvasWidth = 300
  const canvasHeight = 200


  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
   const [gameKey, setGameKey] = useState(0); // key to reset game
  const navigate = useNavigate();

  const HandleGameOver = (score) => {
    setFinalScore(score);
    setGameOver(true)
   }

  const HandleRestart = () => {
    setGameOver(false);
    setGameKey(prev=>prev+1); 
   }

   const handleExit = () => {
    navigate("/");
   }

  return (
    <div className="Game-Container">
      <div className="Game-Area">
        <h2>Snake Game</h2>
        {!gameOver && <GameLogic key={gameKey} onGameOver={HandleGameOver}/>}
        
        {gameOver && (
          <GameOver
          score={finalScore}
          onRestart={HandleRestart}
          onExit={handleExit}
          />
        )}
      </div>


      <div className="Leaderboard-Container">
        <h2>Leaderboard</h2>
        { <Leaderboard/>}
        <div className="CurrentScore-Area">
          <h2>Player Name</h2>
          <canvas 
         ref={canvasRef}
         width={canvasWidth}
         height={canvasHeight}
         style={{border: "2px solid white", marginTop: "20px"}}
          />
        </div>
      </div>
    </div>
    
  )
}

export default Frame