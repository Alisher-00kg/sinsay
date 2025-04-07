import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Unplush1, Unplush2, Unplush3 } from "../assets/images/images";
import { Icons } from "../assets/icons/icons";

export const About = () => {
  useEffect(() => {
<<<<<<< HEAD
    AOS.init({ duration: 1000 });
=======
    AOS.init({ duration: 1000, once: true });
>>>>>>> eda4ef8380ab1fcc89c12dbffb956af5515075a5
  }, []);
  return (
    <article>
      <FirstBox>
        <div className="f_box">
          <StyledH1>ABOUT SINSEY</StyledH1>
        </div>
        <div
          className="box"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <EndAlignedSpan>
            I wanted to create a radical new skincare brand. For too long, the
            world of skincare had been defined by exaggerated promises and
            suspect chemicals. After gathering a team of health and skincare
            experts, we set out together to challenge the industry. That meant
            going back to basics.
          </EndAlignedSpan>
          <EndAlignedPTag>
            We wanted to take an autonomous approach. Working from the ground
            up, we built an online-only, direct to customer model, which means
            we can sell premium products with the highest quality ingredients at
            a great price.
          </EndAlignedPTag>
          <EndAlignedPTag>
            Staying true to our philosophy of simplicity and transparency, we
            intend to remain uncompromising in our mission to offer consumers a
            premium natural skincare alternative. <br />
            <StyledSpan>Ning Li, Typology Founder</StyledSpan>
          </EndAlignedPTag>
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
            <StyledSpan>
              Our philosophy is not to add anything to our products to make them
              stand out; instead we pare them back and distil each formula down
              to the most-essential, natural active ingredients.
            </StyledSpan>
            <StyledPTag>
              We're tireless in our mission to hunt down the best
              ingredients.Whether in France, around Europe or further afield in
              search of exotic extracts, they must be sourced from sustainable
              farms using gentle extraction techniques.
            </StyledPTag>
            <StyledPTag>
              Our formulas are simple, considered and effective. Provenance is
              important to us, so you'll always know where our ingredients come
              from. And we'll even show you how to create your own skincare
              formulations along the way.
            </StyledPTag>
            <StyledPTag>
              All formulations are 100% French. Our partner laboratories in
              Bergerac, Aix en Provence and Compiègne work with us to put their
              French skincare heritage to good use.
            </StyledPTag>
          </div>
        </div>
        <img
          className="image"
          src={Unplush2}
          alt="photo"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
      </SecondBox>
      <ThirdBox>
        <img
          className="image"
          src={Unplush3}
          alt="photo"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <div
          className="cont"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>B CORP CERTIFICATION</h1>
          <div className="s_box">
            <StyledSpan>
              Since it began, our company has strived to become more respectful
              of the environment, have a positive impact on society, and support
              customers with straight-talking transparency.
            </StyledSpan>
            <StyledPTag>
              Founded in 2006, the B Corp movement brings together companies
              with a common objective: to balance purpose and profit by
              integrating social and environmental commitments into their
              economic models.
            </StyledPTag>
            <StyledPTag>
              The idea is not to become the best in the world, but to try to be
              better for the world. B Corp certification allows us to act on our
              need to have a positive impact within our industry and society
              through its implementation of concrete guidance and assessments.
            </StyledPTag>
          </div>
        </div>
      </ThirdBox>
      <FourthBox>
        <StyledPTag>
          We investigate the right ingredients for each skin typology. Our
          formulations are concise, concentrated, and made in France.
        </StyledPTag>
        <div>
          <Icons.VeganOne />
          <Icons.Bcorp />
          <Icons.VeganOne />
        </div>
      </FourthBox>
    </article>
  );
};
const FirstBox = styled.div`
  background-image: url(${Unplush1});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  width: 84%;
  height: 100vh;
  display: flex;
  justify-content: center;
  gap: 20%;
  align-items: center;
  margin: 0 auto;
  .f_box {
    height: 70vh;
  }
  .box {
    display: flex;
    flex-direction: column;
    width: 427px;
    height: 60vh;
    gap: 20px;
  }
`;
const StyledH1 = styled.h1`
  font-size: 61px;
  font-weight: 500;
`;
const StyledPTag = styled.p`
  font-size: 21px;
  font-weight: 400;
  text-align: left;
`;
const StyledSpan = styled.span`
  font-size: 21px;
  text-align: left;
  font-weight: 500;
`;
const EndAlignedSpan = styled(StyledSpan)`
  text-align: end;
`;
const EndAlignedPTag = styled(StyledPTag)`
  text-align: end;
`;
const SecondBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8.5%;
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
  }
  .image {
    width: 650px;
    height: 940px;
    object-fit: cover;
  }
`;
const ThirdBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 78px;
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
      width: 434px;
      display: flex;
      flex-direction: column;
      gap: 20px;
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
