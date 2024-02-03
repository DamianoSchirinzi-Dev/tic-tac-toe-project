import {StyledSquare} from './Sqaure.styled'

interface SqaureProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

export const Square = ({ value, onClick }: SqaureProps) => {
  return <StyledSquare onClick={onClick}>{value}</StyledSquare>;
};
