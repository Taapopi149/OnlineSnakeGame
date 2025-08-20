import React from 'react'


const GameOver = ({score, onRestart, onExit}) => {
  return (
 <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "24px",
      zIndex: 1000
    }}>
      <h2>Game Over</h2>
      <p>Your Score: {score}</p>
      <button onClick={onRestart} style={{ margin: "10px", padding: "10px" }}>Restart</button>
      <button onClick={onExit} style={{ margin: "10px", padding: "10px" }}>Exit</button>
    </div>
  )
}

export default GameOver