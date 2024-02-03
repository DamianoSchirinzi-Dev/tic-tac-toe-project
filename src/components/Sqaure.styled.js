import styled from "styled-components";

export const StyledSquare = styled.button`
  background: white;
  border: 1px solid #999;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 60px;
  margin: 5px; // Adjust margin for consistent spacing
  padding: 0;
  text-align: center;
  width: 60px;
  transition: all 0.3s ease; // Smooth transition for hover effects
  cursor: pointer; // Cursor indicates an interactive element

  // Match the border-radius with GameInfo for consistency
  border-radius: 4px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(21, 156, 228, 0.4); // Focus ring around the button
  }

  &:hover {
    background-color: #f0f0f0; // Slightly change background on hover
    transform: translateY(-2px); // Lift the button up slightly
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for depth
  }

  &:active {
    background-color: #e0e0e0; // Darken background when pressed
    transform: translateY(1px); // Button appears pressed down
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Reduce shadow to give a pressed effect
  }
`;