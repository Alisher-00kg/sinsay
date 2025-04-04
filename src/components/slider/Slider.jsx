import React, { useRef } from "react";
import styled from "styled-components";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../utils/constants/slider";
export const Slider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonWrapper>
        <PrevButton ref={prevRef}>&lt;</PrevButton>
        <NextButton ref={nextRef}>&gt;</NextButton>
      </ButtonWrapper>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 0 auto;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 15px;
`;
const StyledButton = styled.button`
  background-color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const PrevButton = styled(StyledButton)``;

const NextButton = styled(StyledButton)``;
