import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick, disabled, type, ...props }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type} {...props}>
      {children}
    </StyledButton>
  );
};
const StyledButton = styled.button`
  width: 100px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background-color: #000000;
  transition: transform 0.1s ease, background-color 0.2s ease;

  &:active {
    transform: scale(1.2);
    background-color: rgb(3, 42, 81);
  }
`;
