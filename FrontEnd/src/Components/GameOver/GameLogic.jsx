import React, { useEffect, useRef, useState } from "react";

const GameLogic = ({ onGameOver }) => {
  const canvasRef = useRef(null);
  const box = 20;
  const canvasWidth = 1400;
  const canvasHeight = 800;

  const [score, setScore] = useState(0);

  const snake = useRef([{ x: 9 * box, y: 10 * box }]);

  const food = useRef({
    x: Math.floor(Math.random() * (canvasWidth / box)) * box,
    y: Math.floor(Math.random() * (canvasHeight / box)) * box,
  });

  const direction = useRef("RIGHT");

  const changeDirection = (e) => {
    if (e.key === "ArrowUp" && direction.current !== "DOWN")
      direction.current = "UP";
    else if (e.key === "ArrowDown" && direction.current !== "UP")
      direction.current = "DOWN";
    else if (e.key === "ArrowLeft" && direction.current !== "RIGHT")
      direction.current = "LEFT";
    else if (e.key === "ArrowRight" && direction.current !== "LEFT")
      direction.current = "RIGHT";
  };

  useEffect(() => {
    document.addEventListener("keydown", changeDirection);
    return () => {
      document.removeEventListener("keydown", changeDirection);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return; // ✅ prevent null crash
    const context = canvasRef.current.getContext("2d");

    let lastTime = 0;
    const speed = 150; // milliseconds per move
    let animationFrameId;

    const drawGame = (timestamp) => {
      if (timestamp - lastTime >= speed) {
        lastTime = timestamp;

        // 1. Clear canvas
        context.fillStyle = "#2d2d2d";
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        // 2. Draw snake
        for (let i = 0; i < snake.current.length; i++) {
          context.fillStyle = i === 0 ? "#00FF00" : "#66ff66";
          context.fillRect(snake.current[i].x, snake.current[i].y, box, box);
        }

        // 3. Draw food
        context.fillStyle = "red";
        context.fillRect(food.current.x, food.current.y, box, box);

        // 4. Snake movement
        let headX = snake.current[0].x;
        let headY = snake.current[0].y;

        if (direction.current === "LEFT") headX -= box;
        if (direction.current === "RIGHT") headX += box;
        if (direction.current === "UP") headY -= box;
        if (direction.current === "DOWN") headY += box;

        // 5. Collision detection
        if (
          headX < 0 ||
          headY < 0 ||
          headX >= canvasWidth ||
          headY >= canvasHeight ||
          snake.current.some(
            (segment) => segment.x === headX && segment.y === headY
          )
        ) {
          if (onGameOver) onGameOver(score); // ✅ pass score back
          cancelAnimationFrame(animationFrameId);
          return;
        }

        // 6. Check food collision
        if (headX === food.current.x && headY === food.current.y) {
          setScore((prev) => prev + 1);

          // respawn food (make sure not inside snake)
          let newFood;
          do {
            newFood = {
              x: Math.floor(Math.random() * (canvasWidth / box)) * box,
              y: Math.floor(Math.random() * (canvasHeight / box)) * box,
            };
          } while (
            snake.current.some(
              (segment) => segment.x === newFood.x && segment.y === newFood.y
            )
          );

          food.current = newFood;
        } else {
          snake.current.pop(); // remove tail
        }

        // 7. Add new head
        const newHead = { x: headX, y: headY };
        snake.current.unshift(newHead);
      }

      // Schedule next frame
      animationFrameId = requestAnimationFrame(drawGame);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(drawGame);

    // Cleanup
    return () => cancelAnimationFrame(animationFrameId);
  }, [onGameOver, score]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "white" }}>Score: {score}</h2>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: "2px solid white", marginTop: "20px" }}
      />
    </div>
  );
};

export default GameLogic;
