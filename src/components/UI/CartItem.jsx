import React from "react";
import { Icons } from "../../assets/icons/icons";
import styled from "styled-components";
styled;

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
          <div>
            <StyledButton>-</StyledButton>
            <StyledButton>{amount}</StyledButton>
            <StyledButton>+</StyledButton>
          </div>
          <StyledSpan>${totalPrices}</StyledSpan>
          <StyledBasket></StyledBasket>
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
  width: 272px;
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

const StyledButton = styled.button`
  border: none;
  width: 36px;
  height: 45px;
  background: rgb(207, 201, 203);
  font-size: 21px;
  font-weight: 400;
`;

const StyledBasket = styled(Icons.DeleteBasket)`
  width: 18px;
  height: 24px;
  padding-bottom: 1px;
`;

const StyledSpan = styled.span`
  font-size: 21px;
  font-weight: 400;
`;
