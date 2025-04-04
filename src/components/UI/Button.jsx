import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick, disabled, type, ...props }) => {
  return (
    <div>
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </StyledButton>
    </div>
  );
};
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  //   gap: 10px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background-color: #000000;
  width: 100px;
  transition: transform 0.1s ease, background-color 0.2s ease;

  &:active {
    transform: scale(1.2);
    background-color: rgb(3, 42, 82);
  }
`;
// 1
