import React from "react";
import { Icons } from "../../assets/icons/icons";
import styled from "styled-components";
import IconButton from "./IconButton";

export const CartItem = ({
  image,
  title,
  price,
  amount,
  totalPrices,
  id,
  increment,
  decrement,
  onDelete,
}) => {
  return (
    <StyledCartWrapper>
      <StyledContainer>
        <StyledImgDiv>
          <img
            src={image}
            alt="image"
            style={{ width: "100%", height: "100%" }}
          />
        </StyledImgDiv>
        <StyledTitle>{title}</StyledTitle>
        <StyledFouritemsWrapper>
          <StyledSpan>${price}</StyledSpan>
          <StyledButtDiv>
            <StyledIconButton onClick={() => decrement(id)}>-</StyledIconButton>
            <StyledSpan>{amount}</StyledSpan>
            <StyledIconButton onClick={() => increment(id)}>+</StyledIconButton>
          </StyledButtDiv>
          <StyledSpan>${totalPrices}</StyledSpan>
          <IconButton
            icon={<Icons.DeleteBasket />}
            style={{ paddingBottom: "3px" }}
            onClick={() => onDelete(id)}
          ></IconButton>
        </StyledFouritemsWrapper>
      </StyledContainer>
    </StyledCartWrapper>
  );
};

const StyledCartWrapper = styled.li`
  border-bottom: 2px solid rgb(0, 0, 0);
  width: 100%;
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
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
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
