import React from "react";
import styled from "styled-components";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../../utils/constants/slider";
export const Slider = () => {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        style={{ height: "100%" }}
      >
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <SlideContainer>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "16px",
                }}
              />
            </SlideContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaginationContainer className="swiper-pagination" />
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  margin: 0 auto;
  padding-bottom: 30px;
`;
const SlideContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const PaginationContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: #333;
  }
`;
