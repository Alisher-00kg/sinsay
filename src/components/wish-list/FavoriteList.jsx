import React from "react";
import styled from "styled-components";
import { data } from "../../utils/constants/CardItem";
import { WishListItem } from "./WishListItem";

export const FavoriteList = () => {
  return (
    <>
      <DataCardContainer>
        {data.map((category) => (
          <CategoryCardContainer key={category.id}>
            <ProductCardContainer>
              {category.products.map((product) => (
                <WishListItem key={product.id} {...product} />
              ))}
            </ProductCardContainer>
          </CategoryCardContainer>
        ))}
      </DataCardContainer>
    </>
  );
};
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
