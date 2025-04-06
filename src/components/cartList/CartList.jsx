import React from "react";
import styled from "styled-components";
import { CartItem } from "../UI/CartItem";
import { Button } from "../UI/Button";

const CartList = () => {
  return (
    <StyledContainer>
      <CartlistStyled>
        <StyledH1>Cart</StyledH1>
        <StyledDIv>
          <p>Product</p>
          <StyledPrices>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </StyledPrices>
        </StyledDIv>

        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </CartlistStyled>
      <StyledShopping>
        <StyledContiniueButton>Continue shopping</StyledContiniueButton>
        <StyledCheckoutDiv>
          <StyledTaxContainer>
            <StyledP>Subtotal: $86.00</StyledP>
            <p>Tax included. Shipping calculated at checkout.</p>
          </StyledTaxContainer>
          <StyledButtonCheck>Checkout</StyledButtonCheck>
        </StyledCheckoutDiv>
      </StyledShopping>
    </StyledContainer>
  );
};

export default CartList;

const CartlistStyled = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1280px;
  height: auto;
`;
const StyledH1 = styled.div`
  font-size: 61px;
  font-weight: 500;
  line-height: 120%;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  align-items: center;
`;

const StyledDIv = styled.div`
  width: 1220px;
  height: 36px;
  padding: 50px 135px 25px 59px;
  display: flex;
  gap: 590px;
  border-bottom: 2px solid rgb(0, 0, 0);
  font-size: 21px;
  font-weight: 400;
  line-height: 120%;
`;
const StyledPrices = styled.div`
  display: flex;
  gap: 78px;
`;
const StyledButtonCheck = styled(Button)`
  width: 182px;
  height: 65px;
  margin-top: 10px;
`;
const StyledShopping = styled.div`
  display: flex;
  align-items: end;
  width: 1222px;
  height: 183px;
  padding: 56px 0px 78px 45px;
  margin-left: 0px;
  gap: 415px;
`;

const StyledContiniueButton = styled(Button)`
  width: 283px;
  height: 65px;
`;
const StyledCheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 488px;
  height: 183px;
  gap: 50px;
`;
const StyledTaxContainer = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
`;
const StyledP = styled.p`
  font-size: 36px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 120%;
`;
