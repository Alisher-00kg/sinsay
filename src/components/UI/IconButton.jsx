import React from "react";
import styled from "styled-components";

const IconButton = ({
  icon: Icon,
  children,
  onClick,
  style,
  variant,
  ...rest
}) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} variant={variant} {...rest}>
        {Icon && <Icon />}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  ${({ variant }) => {
    switch (variant) {
      case "delete":
        return `
      color:#000000;
      font-weight:400;

      `;
      case "quantity":
        return `
        background:#CFC9CB;
            
        `;

      default:
        break;
    }
  }};
`;
