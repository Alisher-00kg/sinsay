import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GoCommentDiscussion } from "react-icons/go";
import { LuX } from "react-icons/lu";
import styled from "styled-components";
import { useMenu } from "./MenuContext";
import IconButton from "../components/UI/IconButton";

const SnackBar = () => {
  const { toggleMenu } = useMenu();

  return (
    <MenuList>
      <StyledTop>
        <CloseButton onClick={toggleMenu}>
          <LuX />
        </CloseButton>
      </StyledTop>
      <StyledSecondInnerBox>
        <MenuItem>
          <MenuLink href="#">
            <IoHomeOutline />
            Home
          </MenuLink>
          <MenuLink href="#">
            <GoCommentDiscussion />
            Discussions
          </MenuLink>
          <MenuFast>Show More</MenuFast>
          <MenuFast>About Sinsay</MenuFast>
        </MenuItem>

        <div>
          <Separator />
          <Ma5>@2025 Sinsay, Inc.</Ma5>
          <FooterLink href="#">
            Do not share my personal information | Manage Cookies
          </FooterLink>
          <Separator />
        </div>
      </StyledSecondInnerBox>
    </MenuList>
  );
};

export default SnackBar;

const StyledTop = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: end;
`;
const MenuList = styled.ul`
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: #f9f9f9;
  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 20px;
  z-index: 30;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const MenuLink = styled.a`
  display: flex;
  align-items: center;
  color: #000;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  svg {
    margin-right: 10px;
    font-size: 20px;
    color: #000000;
  }
`;

const MenuFast = styled.li`
  margin-left: 30px;
  color: #000;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const CloseButton = styled(IconButton)`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;

const Ma5 = styled.h5`
  color: #80808092;
  margin-top: auto;
`;

const Separator = styled.hr`
  border-top: solid #eaeaea;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  text-align: center;
  font-size: 12px;
  color: #808080;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const StyledSecondInnerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;
