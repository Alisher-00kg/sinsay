import styled from "styled-components";
import { data } from "../utils/constants/CardItem";
import { MainCard } from "./UI/MainCard";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { Icons } from "react-toastify";
import IconButton from "./UI/IconButton";

export const MainContent = () => {
  const { state, valueInput, setInputValue, inputVisible } =
    useContext(ProductsContext);

  const findedMassiveItem = state.mainMassive.map((item) => ({
    products: item.products.filter((item) =>
      item.title.toLowerCase().includes(valueInput)
    ),
  }));
  const searchMassive = valueInput ? findedMassiveItem : state.mainMassive;

  console.log(findedMassiveItem);

  return (
    <DataCardContainer>
      {inputVisible && (
        <div>
          <Icons.HeaderLoupe />
          <input
            type="text"
            value={valueInput}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      )}
      {searchMassive?.map((category) => (
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
