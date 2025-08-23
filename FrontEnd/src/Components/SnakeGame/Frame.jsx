import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './Frame.css'
import GameLogic from '../GameLogic/GameLogic'
import GameOver from '../GameOver/GameOver'

const Frame = () => {

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
        <div className="CurrentScore-Area">
          <h2>Player Name</h2>
        </div>
      </div>
    </div>
    
  )
}

export default Frame