import React, {useEffect, useRef, useState} from 'react'
import './leaderboard.css'

const leaderboard = () => {
    const canvasRef  = useRef(null)
    const canvasWidth = 300
    const canvasHeight = 600

    return (
    <div>
        <canvas
         ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            style={{border: "2px solid white", marginTop: "20px"}}
        />
           
    </div>
  )
}

export default leaderboard