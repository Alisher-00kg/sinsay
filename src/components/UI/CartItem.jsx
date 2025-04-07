import React from "react";
import { Icons } from "../../assets/icons/icons";
import styled from "styled-components";
import IconButton from "./IconButton";

export const CartItem = ({ img, title, price, amount, totalPrices, id }) => {
  return (
    <StyledCartWrapper>
      <StyledContainer>
        <StyledImgDiv>
          <img src={img} alt="image" />
        </StyledImgDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledFouritemsWrapper>
          <StyledSpan>${price}</StyledSpan>
          <StyledButtDiv>
            <StyledIconButton>-</StyledIconButton>
            <StyledSpan>{amount}1</StyledSpan>
            <StyledIconButton>+</StyledIconButton>
          </StyledButtDiv>
          <StyledSpan>${totalPrices}</StyledSpan>
          <IconButton
            icon={<Icons.DeleteBasket />}
            style={{ paddingBottom: "3px" }}
          ></IconButton>
        </StyledFouritemsWrapper>
      </StyledContainer>
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.li`
  border-bottom: 2px solid rgb(0, 0, 0);
  width: 1220px;
  height: 205px;
  list-style: none;
  padding: 26px 40px 23px 57px;
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
  height: 156px;
`;

const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 156px;
  border: 2px solid rgb(0, 0, 0);
`;

const StyledTitle = styled.p`
  text-align: left;
  max-width: 272px;
  display: flex;
  align-items: center;
  height: 46px;
  font-size: 21px;
  font-weight: 400;
  line-height: 120%;
`;

const StyledFouritemsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 75px;
`;

const StyledButtDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(207, 201, 203);
`;

const StyledSpan = styled.span`
  font-size: 21px;
  font-weight: 400;
  max-width: 45px;
`;
const StyledIconButton = styled(IconButton)`
  font-size: 21px;
  font-weight: 400;
  line-height: 120%;
  height: 45px;
  width: 36px;
`;
