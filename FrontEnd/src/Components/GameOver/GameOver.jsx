import React from 'react'
import './GamOver.css'


const GameOver = ({score, onRestart, onExit}) => {
  return (
 <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "transperant",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "24px",
      zIndex: 1000
    }}>
      <div className="container">
      <h2>Game Over</h2>
      <p>Your Score: {score}</p>
      <button className="Restart" onClick={onRestart} style={{ margin: "10px", padding: "10px" }}>Restart</button>
      <button className="Exit"onClick={onExit} style={{ margin: "10px", padding: "10px" }}>Exit</button>
      </div>
    </div>
  )
}

export default GameOver