import React from "react";
import { Slider } from "../components/slider/Slider";
import { MainContent } from "../components/MainContent";
import styled from "styled-components";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";

export const MainPage = () => {
  const { inputVisible } = useContext(ProductsContext);
  return (
    <StyledContentContainer inputVisible={inputVisible}>
      {inputVisible ? null : <Slider />}

      <MainContent />
    </StyledContentContainer>
  );
};
const StyledContentContainer = styled.div`
  width: 86%;
  gap: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 1%;
`;
