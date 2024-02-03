import styled from "styled-components";

const StyledSquare = styled.button`
  background: white;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 60px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 60px;

  &:focus {
    outline: none;
  }
`;

interface SqaureProps {
  value: "X" | "O" | null;
  onClick: () => void;
}

export const Square = ({ value, onClick }: SqaureProps) => {
  return <StyledSquare onClick={onClick}>{value}</StyledSquare>;
};
