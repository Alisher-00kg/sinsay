import React from "react";
import { Slider } from "../components/slider/Slider";
import { MainContent } from "../components/MainContent";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <StyledContentContainer>
      <Slider />
      <MainContent />
    </StyledContentContainer>
  );
};
const StyledContentContainer = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-left: 1%;
`;
