import React from "react";
import { Slider } from "./slider/Slider";
import { MainContent } from "./MainContent";
import Footer from "./Footer";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <StyledContentContainer>
      <Slider />
      <MainContent />
      <Footer />
    </StyledContentContainer>
  );
};
const StyledContentContainer = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 57px;
  margin: 0 auto;
  padding-left: 1%
`;
