import React, { useContext } from "react";
import { Button } from "../UI/Button";
import { Icons } from "../../assets/icons/icons";
import styled from "styled-components";
import IconButton from "./IconButton";
export const MainCard = ({
  image,
  title,
  price,
  id,
  isFavorite,
  onAddToBasket,
  onToggleFavorite,
}) => {
  return (
    <StyledLi>
      <div>
        <DivImg>
          <StyledImg src={image} alt="img" />
        </DivImg>
        <StyledP>{title}</StyledP>
        <StyledDivConPrice>
          <StyledSpanPrice> ${price}</StyledSpanPrice>
          <IconButton onClick={() => onToggleFavorite(id)}>
            {isFavorite ? (
              <Icons.BlackHeart style={{ width: "27px", height: "27px" }} />
            ) : (
              <Icons.BuyHeart />
            )}
          </IconButton>
        </StyledDivConPrice>
        <StyledButton onClick={() => onAddToBasket(id)}>
          Add to cart
        </StyledButton>
      </div>
    </StyledLi>
  );
};
const StyledLi = styled.li`
  width: 305px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const DivImg = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #000000;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledP = styled.p`
  font-size: 21px;
  font-weight: 400;
  line-height: 120%;
  text-align: center;
  margin-top: 6px;
`;
const StyledDivConPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;
const StyledSpanPrice = styled.span`
  font-size: 21px;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
`;
const StyledButton = styled(Button)`
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 400;
  line-height: 120%;
  text-align: left;
  margin-top: 18px;
`;
