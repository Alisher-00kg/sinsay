import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <IconBurgerMenu/>
        <StyledH4>Sinsay</StyledH4>
        <ContainerIcons>
          <Icons.HeaderLoupe />
          <Icons.HeaderHeart />
          <Icons.HeaderBag />
        </ContainerIcons>
      </ContainerHeader>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 89px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContainerHeader = styled.div`
  width: 96%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 89px;
  border-bottom: 2px solid rgb(0, 0, 0);
`;
const IconBurgerMenu = styled(Icons.BurgerMenu)`
  width: 34px;
  height: 25px;
  cursor: pointer;
`;
const StyledH4 = styled.h4`
  font-size: 36px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
`;
const ContainerIcons = styled.div`
  display: flex;
  gap: 82px;
  cursor: pointer;
`;
