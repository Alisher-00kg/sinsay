import React, { useContext } from "react";
import styled from "styled-components";
import { WishListItem } from "../components/wish-list/WishListItem";
import { ProductsContext } from "../context/ProductsProvider";
export const WishListPage = () => {
  const { state } = useContext(ProductsContext);
  return (
    <>
      <StyledContainerWishList>
        <StyledH2>Wish List</StyledH2>
        <DataCardContainer>
          {state.favorites.length > 0 ? (
            state.favorites.map((product) => (
              <WishListItem key={product.id} {...product} />
            ))
          ) : (
            <StyledMessage>There are no products in favorites</StyledMessage>
          )}
        </DataCardContainer>
      </StyledContainerWishList>
    </>
  );
};
const StyledContainerWishList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  margin-top: 100px;
`;
const StyledH2 = styled.h2`
  font-size: 61px;
  font-weight: 500;
  line-height: 120%;
`;
const DataCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 37px;
`;
const StyledMessage = styled.p`
  font-size: 24px;
  color: #999;
  margin-top: 40px;
`;
