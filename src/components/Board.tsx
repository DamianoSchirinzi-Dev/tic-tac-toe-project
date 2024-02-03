import { Square } from "./Square";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1px;
  margin: 20px;
  max-width: 180px;
`;

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
