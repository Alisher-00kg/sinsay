import React from "react";
import styled from "styled-components";

const IconButton = ({ icon, children, onClick, style, ...rest }) => {
  return (
    <div>
      <StyledButton onClick={onClick} style={style} {...rest}>
        {null ?? icon}
        {children}
      </StyledButton>
    </div>
  );
};

export default IconButton;

const StyledButton = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
