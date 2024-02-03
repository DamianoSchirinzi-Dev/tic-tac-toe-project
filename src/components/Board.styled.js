import styled from "styled-components";

export const StyledBoard = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 1px;
  margin: 20px;
  max-width: 180px;
`;