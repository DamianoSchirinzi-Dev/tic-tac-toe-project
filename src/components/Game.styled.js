import styled from "styled-components";

export const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  

  padding-top: 40px;
`;

export const GameInfo = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  width: 310px;
  justify-content: center;

  background-color: #e6e6e6;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); 
  border: 1px solid #e0e0e0;

  ol {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style:none;

    li {
      padding-bottom: 10px;
      font-size: 20px;

      button {
        background: none;
        padding: 8px;
      }
    }
  }
`;
