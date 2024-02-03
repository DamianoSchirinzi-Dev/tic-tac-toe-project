import { Square } from "./Square";
import { StyledBoard } from "./Board.styled";

interface BoardProps {
  squares: Array<"X" | "O" | null>;
  onClick: (i: number) => void;
}

export const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <StyledBoard>
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </StyledBoard>
  );
};
