import React from "react";
import { Icons } from "../assets/icons/icons";
import styled from "styled-components";
import IconButton from "./UI/IconButton";

export const Header = () => {
  return (
    <StyledHeader>
      <ContainerHeader>
        <IconButton>
          <Icons.Logo />
        </IconButton>
        <StyledH4>Sinsay</StyledH4>
        <ContainerIconsBtn>
          <Icons.HeaderLoupe />
          <Icons.HeaderProfile />
          <Icons.HeaderHeart />
          <Icons.HeaderBag />
          <IconBurgerMenu />
        </ContainerIconsBtn>
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
  height: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 89px;
  border-bottom: 2px solid rgb(0, 0, 0);
`;
const IconBurgerMenu = styled(Icons.BurgerMenu)`
  width: 34px;
  height: 25px;
  margin-left: 20px;
`;
const StyledH4 = styled.h4`
  font-size: 36px;
  font-weight: 400;
  line-height: 120%;
  text-transform: uppercase;
`;
const ContainerIconsBtn = styled(IconButton)`
  display: flex;
  gap: 50px;
`;
