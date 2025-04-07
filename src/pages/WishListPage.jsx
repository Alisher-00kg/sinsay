import React from "react";
import styled from "styled-components";
import { FavoriteList } from "../components/wish-list/FavoriteList";

export const WishListPage = () => {
  return (
    <>
      <StyledContainerWishList>
        <StyledH2>Wish List</StyledH2>
        <FavoriteList />
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
