import React from "react";
import styled from "styled-components";
import { WishListItem } from "../components/wish-list/WishListItem";
export const WishListPage = () => {
  return (
    <>
      <StyledContainerWishList>
        <StyledH2>Wish List</StyledH2>
        <DataCardContainer>
          <WishListItem />
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
`;
const StyledH2 = styled.h2`
  font-size: 61px;
  font-weight: 500;
  line-height: 120%;
`;
const DataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 37px;
`;
const CategoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: flex-start;
`;
const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
