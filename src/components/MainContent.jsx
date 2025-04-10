import styled from "styled-components";
import { MainCard } from "./UI/MainCard";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";

export const MainContent = () => {
  const {
    addToBasketFromMain,
    addToFavor,
    searchMassive,
    inputVisible,
    setInputValue,
    valueInput,
    legthMassive,
  } = useContext(ProductsContext);

  return (
    <DataCardContainer>
      {inputVisible && (
        <StyledLoupeAndInput>
          <StyledInput
            autoFocus
            type="text"
            placeholder="Search..."
            value={valueInput}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </StyledLoupeAndInput>
      )}
      {legthMassive ? (
        searchMassive.map((category) => (
          <CategoryCardContainer key={category.id}>
            <StyledH1>{category.subTitle}</StyledH1>
            <ProductCardContainer>
              {category.products.map((product) => (
                <MainCard
                  key={product.id}
                  {...product}
                  onAddToBasket={addToBasketFromMain}
                  onToggleFavorite={addToFavor}
                />
              ))}
            </ProductCardContainer>
          </CategoryCardContainer>
        ))
      ) : (
        <h1>There are no such items</h1>
      )}
    </DataCardContainer>
  );
};
const DataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
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

const StyledLoupeAndInput = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
  margin-top: 100px;
`;
const StyledInput = styled.input`
  width: 550px;
  height: 50px;
  font-weight: 600px;
  font-size: 20px;
  padding: 15px;
  margin-top: 60px;
  border-radius: 12px;
`;
