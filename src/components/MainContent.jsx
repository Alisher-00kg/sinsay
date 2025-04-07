import styled from "styled-components";
import { data } from "../utils/constants/CardItem";
import { MainCard } from "./UI/MainCard";

export const MainContent = () => {
  return (
    <DataCardContainer>
      {data.map((category) => (
        <CategoryCardContainer key={category.id}>
          <StyledH1>{category.subTitle}</StyledH1>
          <ProductCardContainer>
            {category.products.map((product) => (
              <MainCard key={product.id} {...product} />
            ))}
          </ProductCardContainer>
        </CategoryCardContainer>
      ))}
    </DataCardContainer>
  );
};
const DataCardContainer = styled.main`
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
const StyledH1 = styled.h1`
  font-size: 47px;
  font-weight: 500;
  line-height: 120%;
  text-align: left;
`;
const ProductCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
