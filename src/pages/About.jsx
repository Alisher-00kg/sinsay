import React, { useEffect } from "react";
import styled from "styled-components";
import { LipOil4, LipStick4 } from "../assets/images/images";
import { Icons } from "../assets/icons/icons";

const About = () => {
  return (
    <article>
      <FirstBox>
        <div className="f_box">
          <h1>ABOUT SINSEY</h1>
        </div>
        <div
          className="box"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p>
            I wanted to create a radical new skincare brand. For too long, the
            world of skincare had been defined by exaggerated promises and
            suspect chemicals. After gathering a team of health and skincare
            experts, we set out together to challenge the industry. That meant
            going back to basics.
          </p>
          <span>
            We wanted to take an autonomous approach. Working from the ground
            up, we built an online-only, direct to customer model, which means
            we can sell premium products with the highest quality ingredients at
            a great price.
          </span>
          <span>
            Staying true to our philosophy of simplicity and transparency, we
            intend to remain uncompromising in our mission to offer consumers a
            premium natural skincare alternative. Ning Li, Typology Founder
          </span>
        </div>
      </FirstBox>
      <SecondBox>
        <div
          className="container"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>OUR FORMULATIONS</h1>
          <div className="s_box">
            <p>
              Our philosophy is not to add anything to our products to make them
              stand out; instead we pare them back and distil each formula down
              to the most-essential, natural active ingredients.
            </p>
            <span>
              We're tireless in our mission to hunt down the best
              ingredients.Whether in France, around Europe or further afield in
              search of exotic extracts, they must be sourced from sustainable
              farms using gentle extraction techniques.
            </span>
            <span>
              Our formulas are simple, considered and effective. Provenance is
              important to us, so you'll always know where our ingredients come
              from. And we'll even show you how to create your own skincare
              formulations along the way.
            </span>
            <span>
              All formulations are 100% French. Our partner laboratories in
              Bergerac, Aix en Provence and Compiègne work with us to put their
              French skincare heritage to good use.
            </span>
          </div>
        </div>
        <img className="image" src={LipOil4} alt="photo" />
      </SecondBox>
      <ThirdBox>
        <img className="image" src={LipStick4} alt="photo" />
        <div
          className="cont"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>OUR FORMULATIONS</h1>
          <div className="s_box">
            <p>
              Our philosophy is not to add anything to our products to make them
              stand out; instead we pare them back and distil each formula down
              to the most-essential, natural active ingredients.
            </p>
            <span>
              We're tireless in our mission to hunt down the best
              ingredients.Whether in France, around Europe or further afield in
              search of exotic extracts, they must be sourced from sustainable
              farms using gentle extraction techniques.
            </span>
            <span>
              Our formulas are simple, considered and effective. Provenance is
              important to us, so you'll always know where our ingredients come
              from. And we'll even show you how to create your own skincare
              formulations along the way.
            </span>
            <span>
              All formulations are 100% French. Our partner laboratories in
              Bergerac, Aix en Provence and Compiègne work with us to put their
              French skincare heritage to good use.
            </span>
          </div>
        </div>
      </ThirdBox>
      <FourthBox>
        <p>
          We investigate the right ingredients for each skin typology. Our
          formulations are concise, concentrated, and made in France.
        </p>
        <div>
          <Icons.VeganOne />
          <Icons.Bcorp />
          <Icons.VeganOne />
        </div>
      </FourthBox>
    </article>
  );
};

export default About;
const FirstBox = styled.div`
  background-image: url(${LipOil4});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  width: 90%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  margin: 0 auto;
  .f_box {
    height: 70vh;
    h1 {
      font-size: 61px;
      font-weight: 500;
    }
  }
  .box {
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 50vh;
    gap: 20px;
    p,
    span {
      font-size: 21px;
      text-align: end;
      font-weight: 500;
    }
    span {
      font-weight: 400;
    }
  }
`;
const SecondBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 80px;
  padding: 0 76px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 500px;
    justify-content: center;
    h1 {
      font-size: 45px;
      font-weight: 500;
    }
  }
  .s_box {
    width: 454px;
    height: 727px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    p,
    span {
      font-size: 21px;
      font-weight: 500;
    }
    span {
      font-weight: 400;
    }
  }
  .image {
    width: 650px;
    height: 940px;
    object-fit: cover;
  }
`;
const ThirdBox = styled.div`
  display: flex;
  gap: 44px;
  justify-content: center;
  height: 808px;
  .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: 60px;
    h1 {
      font-size: 47px;
      font-weight: 500;
    }
    .s_box {
      width: 454px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      p,
      span {
        font-size: 21px;
        font-weight: 500;
      }
      span {
        font-weight: 400;
      }
    }
  }
`;
const FourthBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 62px;
  margin-top: 70px;
  p {
    font-size: 27px;
    font-weight: 400;
    width: 589px;
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    gap: 200px;
  }
`;
