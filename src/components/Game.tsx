import { useState } from "react";
import { Board } from "./Board";
import {GameInfo , StyledGameContainer} from "./Game.styled";

export const Game = () => {
  const [history, setHistory] = useState<Array<Array<"X" | "O" | null>>>([
    Array(9).fill(null),
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: any) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    
    console.log(historyPoint);
    console.log("Current: " + current);

    const squares = [...current];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: any) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current);
  const moves = history.map((_step, move) => {
    const description = move ? `Go to move #${move}` : `Go to game start`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <StyledGameContainer>
      <Board squares={current} onClick={handleClick} />
      <GameInfo>
        <div>{status}</div>
        <ol>{moves}</ol>
      </GameInfo>
    </StyledGameContainer>
  );
};

const calculateWinner = (squares: Array<"X" | "O" | null>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
