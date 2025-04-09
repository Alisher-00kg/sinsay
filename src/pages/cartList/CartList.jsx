import React, { useContext } from "react";
import styled from "styled-components";
import { CartItem } from "../../components/UI/CartItem";
import { Button } from "../../components/UI/Button";
import { ProductsContext } from "../../context/ProductsProvider";

const CartList = () => {
  const { state, increment, decrement, deleteFromBasket } =
    useContext(ProductsContext);
  return (
    <StyledContainer>
      <CartlistStyled>
        <StyledH1>Cart</StyledH1>
        {state.basket.length > 0 ? (
          <>
            <StyledDIv>
              <p>Product</p>
              <StyledPrices>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </StyledPrices>
            </StyledDIv>

            {state.basket.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                amount={item.amount}
                totalPrices={item.totalPrice}
                increment={increment}
                decrement={decrement}
                onDelete={deleteFromBasket}
              />
            ))}
          </>
        ) : (
          <StyledMessage>В корзине пока нет товаров</StyledMessage>
        )}
      </CartlistStyled>
      <StyledShopping>
        <StyledContiniueButton>Continue shopping</StyledContiniueButton>
        <StyledCheckoutDiv>
          <StyledTaxContainer>
            <StyledP>
              Subtotal: $
              {state.basket.reduce((acc, item) => acc + item.totalPrice, 0)}
            </StyledP>
            <p>Tax included. Shipping calculated at checkout.</p>
          </StyledTaxContainer>
          <StyledButtonCheck>Checkout</StyledButtonCheck>
        </StyledCheckoutDiv>
      </StyledShopping>
    </StyledContainer>
  );
};

export default CartList;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 110px;
  align-items: center;
  margin-top: 80px;
  width: 84%;
`;
const CartlistStyled = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 auto;
`;
const StyledH1 = styled.div`
  font-size: 61px;
  font-weight: 500;
  line-height: 120%;
`;
const StyledDIv = styled.div`
  width: 100%;
  height: 36px;
  padding: 50px 135px 25px 59px;
  display: flex;
  gap: 60%;
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
const StyledMessage = styled.p`
  font-size: 24px;
  color: #999;
  margin-top: 40px;
`;
