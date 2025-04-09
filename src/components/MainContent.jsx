import styled from "styled-components";
import { MainCard } from "./UI/MainCard";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { Icons } from "./../assets/icons/icons";
import IconButton from "./UI/IconButton";

export const MainContent = () => {
  const {
    state: { productsCatalog },
    addToBasketFromMain,
    addToFavor,
    searchMassive,
    inputVisible,
    setInputValue,
    blurs,
    valueInput,
  } = useContext(ProductsContext);

  const founded = searchMassive.find((i) => i.products.length > 0);

  return (
    <DataCardContainer>
      {inputVisible && (
        <StyledLoupeAndInput>
          <Icons.HeaderLoupe></Icons.HeaderLoupe>
          <StyledInput
            autoFocus
            onBlur={() => blurs(!inputVisible)}
            type="text"
            value={valueInput}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </StyledLoupeAndInput>
      )}
      {founded ? (
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

const StyledLoupeAndInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledInput = styled.input`
  width: 600px;
  height: 30px;
  border-radius: 20px;
`;
